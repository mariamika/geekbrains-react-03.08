export default class Content {
  // не совсем уверен, что решение верное
  // но как вариант, вместо Config здесь мог бы быть класс
  // подгружающий данные с БД
  // можно конечно было использовать JSON и грузить с него?
  // в общем, надо смотреть как обычно люди делают :)
  static menu = [
    { label: 'POSTS', href: '#/posts' },
    { label: 'ABOUT', href: '#/' },
    { label: 'BLOGGERS', href: '#/bloggers' },
  ]

  static categories = [
    { tag: 'Web Design' },
    { tag: 'HTML' },
    { tag: 'JavaScript' },
    { tag: 'CSS' },
    { tag: 'Tutorials' },
  ]

}
