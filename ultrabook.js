class Ultrabook extends Computer {
    constructor(manufacturer, processor, hardDiskSize) {
        super(manufacturer, processor);
        this._hardDiskSize = hardDiskSize;
    }

    get hardDiskSize() {
        return this._hardDiskSize;
    }
    set hardDiskSize(newHardDiskSize) {
        this._hardDiskSize = newHardDiskSize;
    }

    showInfo() {
        return [super.showInfo(), this.hardDiskSize];
    }
}