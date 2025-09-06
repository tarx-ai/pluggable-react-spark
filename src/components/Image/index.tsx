import { useState } from "react";
import { ImageProps } from "react"; // Using regular img tag in Vite
import cn from "classnames";

const Image = ({ className, ...props }: ImageProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <NextImage
            className={`inline-block align-top opacity-0 transition-opacity ${
                loaded && "opacity-100"
            } ${className}`}
            onLoadingComplete={() => setLoaded(true)}
            {...props}
        />
    );
};

export default Image;
