// 相比于上面的 querystring 模块来说，这个模块就是专门用来解析地址的
// 它会将我们所输入的地址解析成每一个切片

const url = require('url');

const slice = url.parse('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=node&rsv_spt=1&oq=%25E7%2599%25BE%25E5%25BA%25A6&rsv_pq=fcc81bbe00148d5f&rsv_t=11da6BXvEFiM8fxwN3z4WvPZXY8fqA%2B4dqkvNG%2Fbpcv8UneW1LgDxzHGJ8%2BtU3wlImGl&rqlang=cn&rsv_enter=1&rsv_sug3=4&rsv_sug2=0&inputT=89&rsv_sug4=89', true);

console.log(slice);
// 结果很长。。。
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: '?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=node&rsv_spt=1&oq
//      =%25E7%2599%25BE%25E5%25BA%25A6&rsv_pq=fcc81bbe00148d5f&rsv_t=11da6BXvEFiM8fxwN3
//      z4WvPZXY8fqA%2B4dqkvNG%2Fbpcv8UneW1LgDxzHGJ8%2BtU3wlImGl&rqlang=cn&rsv_enter=1&r
//      sv_sug3=4&rsv_sug2=0&inputT=89&rsv_sug4=89',
//     query: { ie: 'utf-8',
//     f: '8',
//     rsv_bp: '1',
//     rsv_idx: '2',
//     tn: 'baiduhome_pg',
//     wd: 'node',
//     rsv_spt: '1',
//     oq: '%E7%99%BE%E5%BA%A6',
//     rsv_pq: 'fcc81bbe00148d5f',
//     rsv_t: '11da6BXvEFiM8fxwN3z4WvPZXY8fqA+4dqkvNG/bpcv8UneW1LgDxzHGJ8+tU3wlImG
//     l',
//     rqlang: 'cn',
//     rsv_enter: '1',
//     rsv_sug3: '4',
//     rsv_sug2: '0',
//     inputT: '89',
//     rsv_sug4: '89'
//     },
//     pathname: '/s',
//     path: '/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=node&rsv_spt=1&oq
//     =%25E7%2599%25BE%25E5%25BA%25A6&rsv_pq=fcc81bbe00148d5f&rsv_t=11da6BXvEFiM8fxwN3
//   z4WvPZXY8fqA%2B4dqkvNG%2Fbpcv8UneW1LgDxzHGJ8%2BtU3wlImGl&rqlang=cn&rsv_enter=1&r
//   sv_sug3=4&rsv_sug2=0&inputT=89&rsv_sug4=89',
//   href: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg
//   &wd=node&rsv_spt=1&oq=%25E7%2599%25BE%25E5%25BA%25A6&rsv_pq=fcc81bbe00148d5f&rsv
//   _t=11da6BXvEFiM8fxwN3z4WvPZXY8fqA%2B4dqkvNG%2Fbpcv8UneW1LgDxzHGJ8%2BtU3wlImGl&rq
//   lang=cn&rsv_enter=1&rsv_sug3=4&rsv_sug2=0&inputT=89&rsv_sug4=89'
// }

// 选择这个的原因是因为它会解释出很详细的信息
// 这样，我们就可以选取那些我们需要的内容

// 还有其它 3 个方法，不是很有必要说了，需要的话，就去官网查就可以了。

