export const createContent = () => {
    const content = document.createElement('div');
    content.className = 'content';
    document.body.append(content);
    return content;
};
