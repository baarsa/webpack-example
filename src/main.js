import {WikiApi} from "./wikiapi";
import {createContent} from "./createContent";
import './index.css';
import './main.css';

const category = 'JavaScript web frameworks';

async function init() {
    const pages = await(new WikiApi()).getPagesInCategory(category);
    const content = createContent();
    const title = document.createElement('h1');
    title.innerText = `Wikipedia articles on ${category}`;
    title.className = 'title';
    content.append(title);

    const ul = document.createElement('ul');
    content.append(ul);
    pages.forEach(page => {
        const link = document.createElement('a');
        link.setAttribute('href', `/article.html?id=${page.pageid}`);
        link.innerText = page.title;
        const li = document.createElement('li');
        li.append(link);
        ul.append(li);
    });

    const animals = document.createElement('div');
    animals.className = 'animals';
    content.append(animals);
}

init();

