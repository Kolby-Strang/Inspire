import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuotesController {
    constructor() {
        this.getQuote()
    }
    async getQuote() {
        try {
            await quotesService.getQuote()
            setHTML('quote-content', AppState.quote.content)
            setHTML('quote-author', '- ' + AppState.quote.author)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}