import { useState } from "react";
import cn from "classnames";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

const Image = ({ className, onLoad, ...props }: ImageProps) => {
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
            {...props}
        />
    );
};

export default Image;
