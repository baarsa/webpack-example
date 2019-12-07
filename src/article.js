import qs from 'query-string';
import {WikiApi} from "./wikiapi";
import {createContent} from "./createContent";
import './index.css';
import './article.css';

async function init() {
    const content = createContent();
    const pageId = qs.parse(location.search).id;
    const page = await(new WikiApi()).getExtract(pageId);
    const extract = page.extract;
    const text = document.createElement('div');
    text.insertAdjacentHTML(
        'afterbegin',
        (extract !== undefined && extract !== '') ? extract : 'Unable to get extract from Wikipedia.');
    content.append(text);

    const link = document.createElement('a');
    link.className = 'wikipedia-link';
    link.setAttribute('href', `https://en.wikipedia.org/?curid=${page.pageid}`);
    link.setAttribute('target', '_blank');
    link.innerText = 'Full article on Wikipedia';
    const linkWrapper = document.createElement('div');
    linkWrapper.className = 'wikipedia-link-wrapper';
    linkWrapper.append(link);
    content.append(linkWrapper);
}

init();
