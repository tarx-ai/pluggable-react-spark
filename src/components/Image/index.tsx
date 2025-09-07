import { useState } from "react";
import cn from "classnames";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    sizes?: string;
    fill?: boolean;
}

const Image = ({ className, onLoad, fill, sizes, ...props }: ImageProps) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        setLoaded(true);
        onLoad?.(e);
    };

    return (
        <img
            className={`inline-block align-top opacity-0 transition-opacity ${
                loaded && "opacity-100"
            } ${className}`}
            onLoad={handleLoad}
            sizes={sizes}
            {...props}
        />
    );
};

export default Image;
