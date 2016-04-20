require('../less/index.less');

class isSomething {
    is (target, something) {
        return Object.prototype.toString.call(target).toUpperCase() === '[OBJECT ' + something.toUpperCase() + ']';
    }
};

/**
 * 瀑布流类
 */
class Waterfall extends isSomething {
    constructor (container, conf) {
        super();
        this.container = container;
        this.left = conf.left;
        this.dis = conf.dis;
        this.initLR();
        this.initPos(this.container.children());
    }
    /**
     * 初始化左右列的高的总和
     * @return {[type]} [description]
     */
    initLR () {
        if (!this.layout) {
            this.layout = [{
                height: 0
            }, {
                height: 0
            }];
        }
    }

    /**
     * 初始化位置信息
     * @param  {array} arr 传入的参数, 默认传入页面中的div
     * @return {[type]}     [description]
     */
    initPos (arr) {
        let left, top, i, imgurl, headurl;
        [].forEach.call(arr, function (item, index) {
            if (this.layout[0].height > this.layout[1].height) {
                left = this.left / 64 + 'rem';
                top = this.layout[1].height;
                i = 1;
            } else {
                left = 0;
                top = this.layout[0].height;
                i = 0;
            }

            if (this.is(item, 'HTMLDivElement')) {
                $(item).css({
                    left: left,
                    top: top
                });
            } else if (this.is(item, 'Object')) {
                    imgurl = item.bgi;
                    headurl = item.head;
                item = this.createNode(item, left, top);
                $(item).find('.img-wapper').css({
                    background: 'url(${imgurl})',
                    'background-size': '100%'
                });
                $(item).find('.user-img').attr('src', headurl);
            }

            this.layout[i].len++;
            this.layout[i].height += parseFloat(getComputedStyle(item, null)['height']) + this.dis - 4;
        }.bind(this));
    }

    /**
     * 获得页面的总高度
     * @return {[type]} [description]
     */
    getHeight () {
        let headerHeight = parseFloat(getComputedStyle($('header')[0], null)['height']);
        let h1 = this.layout[0].height + headerHeight,
            h2 = this.layout[1].height + headerHeight;
        return h1 > h2 ? h1 : h2;
    }

    /**
     * 判断是否到达页面底部
     * @return {Boolean} [description]
     */
    isBottom () {
        let body = document.body;
        return window.innerHeight + body.scrollTop >= (this.getHeight() - 20) * 0.95
    }

    /**
     * 当屏幕滚动到底部时进行加载
     * @return {[type]} [description]
     */
    touchListen () {
        $(window)
        .on('touchstart', this.getData.bind(this))
        .on('scroll', this.getData.bind(this));
    }
    /**
     * 获取数据
     * @return {[type]} [description]
     */
    getData () {
        if (this.isBottom()) {
            $.get('/data/', function(data) {
                console.log(data);
                this.initPos(data);
            }.bind(this));
        }
    }
    /**
     * 当接收到服务器端数据时, 创建节点加入到页面中
     * @param  {Object} item 数据对象
     * @param  {float} left 相对左位移
     * @param  {float} top  相对上位移
     * @return {[type]}      [description]
     */
    createNode (item, left, top) {
        let node = $('<div></div>');
        node.attr('class', 'content');
        node.html(`
            <div class='img-wapper'>
                <p class="time-inf">
                    <span class='date-l'>
                        ${item.dateL}
                    </span>
                    <span class="date-r">
                        ${item.dateR}
                    </span>
                </p>
                <p class='pos-inf'>
                    <img class="pos-ico" src="/images/po.png" alt="">
                    ${item.pos}
                </p>
            </div>
            <div class='inf-wapper'>
                <p class="user-trd" style="display: ${item.trd ? 'block' : 'none'}">
                    ${item.trd}
                </p>
                <img class='user-img' src="">
                <span class='user-inf'>
                    ${item.inf}
                </span>
            </div>`);
        node.css({
            left: left,
            top: top,
        })
        node.appendTo(this.container);
        return node[0];
    }
}

let waterfal = new Waterfall($('.container'), {
    left: 310,
    dis: 20
});

waterfal.touchListen();
