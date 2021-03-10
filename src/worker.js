import marked from 'marked';

addEventListener('message', (event) => {
  const { setting, input } = event.data;
  let prevText = '';
  const renderer = {
    blockquote(quote) {
      const lastNewLinesRemoved = quote.replace(/\n+$/, '');
      const quoted = lastNewLinesRemoved.split(/\r?\n/).map(line => `> ${line}`).join('\n');
      const lastNewLineAdded = quoted.replace(/$/, '\n\n');
      return lastNewLineAdded;
    },
    heading(text, level) {
      const headingLevel = `h${level}`;
      return `${setting[headingLevel]}${text}\n\n`;
    },
    list(body, ordered, start) {
      if (ordered) {
        const listitems = body.split(setting.li);
        const orderedList = listitems.reduce((prev, current, i) => {
          if (i === 0) return current;
          return prev + `${start + (i - 1)}. ${current.replace(/^ /gi, '')}`;
        }, '');
        return `${orderedList}\n`;
      }
      return `${body}\n`;
    },
    listitem(text, isTask, checked) {
      if (!text) return '';

      // text から不要な改行を削除
      text = text.replace(/\n\n$/ig, '\n');
      
      // input タグ等、HTMLタグを除去
      text = text.replace(/(<([^>]+)>)/ig, '').replace(/^ +/ig, '');

      if (isTask) {
        if (checked) {
          text = `[x] ${text}`;
        } else {
          text = `[ ] ${text}`;
        }
      }

      // 行頭にインデントを含む <li> 要素が正しくレンダリングされないバグを防ぐ
      if (prevText && text.indexOf(prevText) !== -1) {
        const splittedTexts = text.split(`${setting.li} `)
          .map(splittedText => splittedText.replace(/\n$/, ''))
          .map(splittedText => splittedText.replace(/\n$/, ''))
        // console.log(splittedTexts);
        const concatText = splittedTexts
          .reduce((prev, next, index) => {
            if (splittedTexts.length - 1 === index) {
              prev += `${setting.li} ${next}`;
            } else {
              prev += `${setting.li} ${next} \n  `;
            }
            return prev;
          }, '');
        return concatText + '\n';
      }
      prevText = text;

      return `${setting.li} ${text}\n`;
    },
    paragraph(text) {
      return `${text}\n\n`;
    },
    link(href, _, text) {
      // text が URL の場合、href=URL、text=URL と解釈される
      // `${text} （${href}）` = URL （URL） となるのを防ぐ
      if (text === href) return `（${href}）`;
      return `${text} （${href}）`;
    }
  };
  marked.use({ renderer });
  const regexp = `( +${setting.li}.*)(\n${setting.li})`;
  const re = new RegExp(regexp, 'ig');
  const result = marked(input).replace(/<br>/ig, '\n').replace(re, '$1\n$2');
  postMessage(result);
});
