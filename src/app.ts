class DocumentItem {
    text: string;
    state: DocumentItemState;

    constructor() {
        this.setState(new DraftDocumentItemState());
    }

    getState() {
        return this.state;
    }

    setState(state: DocumentItemState) {
        this.state = state;
        this.state.setContext(this);
    }

    publishDoc() {
        this.state.publish();
    }

    deleteDoc() {
        this.state.delete();
    }
}

abstract class DocumentItemState {
    name: string;
    item: DocumentItem;

    setContext(item: DocumentItem) {
        this.item = item;
    }

    abstract publish(): void

    abstract delete(): void
}

class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument';

    }

    publish(): void {
        console.log(`На сайт отправлен текст ${this.item.text}`);
        this.item.setState(new PublishDocumentItemState());
    }

    delete(): void {
        console.log('Документ удален');
    }
}

class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocument';
    }

    publish(): void {
        console.log('Нельзя опубликовать опубликованный документ');
    }

    delete(): void {
        console.log('Снять с публикации');
        this.item.setState(new DraftDocumentItemState());
    }
}

const item = new DocumentItem();
item.text = 'Мой пост';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
