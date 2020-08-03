import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLImageElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass

class CardBuilder {

    fun build(book: Book): HTMLElement {
        val containerElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val priceElement = document.createElement("div") as HTMLDivElement
        val descriptionElement = document.createElement("div") as HTMLDivElement
        val detailBtnElement = document.createElement("button") as HTMLButtonElement

        bind(book, imageElement, titleElement, priceElement, descriptionElement, detailBtnElement)
        applyStyle(containerElement, imageElement, titleElement, priceElement, descriptionElement, detailBtnElement)

        containerElement.appendChild(imageElement)
        containerElement.appendChild(titleElement)
        containerElement.appendChild(priceElement)
        containerElement.appendChild(descriptionElement)
        containerElement.appendChild(detailBtnElement)

        return containerElement
    }

    private fun bind(book: Book,
                     imageElement: HTMLImageElement,
                     titleElement: HTMLDivElement,
                     priceElement: HTMLDivElement,
                     descriptionElement: HTMLDivElement,
                     detailBtnElement: HTMLButtonElement
    ){
        imageElement.src = book.coverUrl
        titleElement.innerHTML = book.title
        priceElement.innerHTML = book.price
        descriptionElement.innerHTML = book.description
        detailBtnElement.innerHTML = "Detalles"
        detailBtnElement.addEventListener("click", {
            window.open(book.url)
        })
    }

    private fun applyStyle(containerElement: HTMLDivElement,
                           imageElement: HTMLImageElement,
                           titleElement: HTMLDivElement,
                           priceElement: HTMLDivElement,
                           descriptionElement: HTMLDivElement,
                           detailBtnElement: HTMLButtonElement
    ){
        containerElement.addClass("card", "card-shadow")
        imageElement.addClass("cover-image")
        titleElement.addClass("text-title", "float-left")
        descriptionElement.addClass("text-description", "float-left")
        priceElement.addClass("text-price", "float-left")
        detailBtnElement.addClass("view-details", "ripple", "float-right")
    }

}