enum ImageFormat {
    Png = 'png',
    Jpeg = 'jpeg'
}

interface ResolutionInterface {
    width: number;
    height: number;
}

interface ImageConversionInterface extends ResolutionInterface {
    format: ImageFormat;
}

class ImageBuilder {
    private formats: ImageFormat[] = [];
    private resolution: ResolutionInterface[] = [];

    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }

    addJpeg() {
        if (this.formats.includes(ImageFormat.Jpeg)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    }

    addResolution(width: number, height: number) {
        this.resolution.push({width, height});
        return this;
    }

    build(): ImageConversionInterface[] {
        const res: ImageConversionInterface[] = [];
        for (const r of this.resolution) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height
                });
            }
        }

        return res;
    }
}
