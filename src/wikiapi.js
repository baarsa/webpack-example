export class WikiApi {

    async getPagesInCategory(category) {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=categorymembers&cmtitle=Category:${category}&cmlimit=20`, {
            method: 'GET',
            dataType: 'json',
        });
        const responseDecoded = await response.json();
        return responseDecoded.query.categorymembers;
    }

    async getExtract(pageId) {
        const response = await fetch( `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&pageids=${pageId}&exintro`, {
            method: 'GET',
            dataType: 'json',
        });
        const responseDecoded = await response.json();
        return responseDecoded.query.pages[pageId];
    }
}
