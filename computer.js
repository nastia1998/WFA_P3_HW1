class Computer {
    constructor(manufacturer, processor) {
        this._manufacturer = manufacturer;
        this._processor = processor;
    }

    get manufacturer() {
        return this._manufacturer;
    }
    set manufacturer(newManufacturer) {
        this._manufacturer = newManufacturer;
    }

    get processor() {
        return this._processor;
    }
    set processor(newProcessor) {
        this._processor = newProcessor;
    }

    showInfo() {
        return [this.manufacturer, this.processor];
    }
}