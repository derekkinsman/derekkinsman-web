import { ImageProps } from '@types';
import Image from 'next/image';

const ResponsiveImage = ({
  alt,
  height,
  isBackground,
  title,
  url,
  className,
  imgClassName,
  width,
  responsiveImage,
  noContainer,
}: ImageProps) => {
  return (
    <>
      {noContainer ? (
        <>
          {responsiveImage ? (
            <Image
              src={responsiveImage.src}
              title={responsiveImage.title || responsiveImage.alt}
              alt={responsiveImage.alt || ''}
              fill={isBackground}
              sizes={responsiveImage.sizes}
              width={!isBackground ? responsiveImage.width : undefined}
              height={!isBackground ? responsiveImage.height : undefined}
              placeholder={!!responsiveImage.base64 ? 'blur' : undefined}
              blurDataURL={responsiveImage.base64}
              className={imgClassName}
            />
          ) : (
            <Image
              src={url}
              width={!isBackground ? width : undefined}
              height={!isBackground ? height : undefined}
              title={title || alt}
              fill={isBackground}
              alt={alt || ''}
              aria-hidden="true"
              className={imgClassName}
            />
          )}
        </>
      ) : (
        <div
          className={`${isBackground ? 'background' : 'image'}-container${
            className ? ` ${className}` : ''
          }`}
        >
          {responsiveImage ? (
            <Image
              src={responsiveImage.src}
              title={responsiveImage.title || responsiveImage.alt}
              alt={responsiveImage.alt || ''}
              fill={isBackground}
              sizes={responsiveImage.sizes}
              width={!isBackground ? responsiveImage.width : undefined}
              height={!isBackground ? responsiveImage.height : undefined}
              placeholder={!!responsiveImage.base64 ? 'blur' : undefined}
              blurDataURL={responsiveImage.base64}
              className={imgClassName}
            />
          ) : (
            <Image
              src={url}
              width={!isBackground ? width : undefined}
              height={!isBackground ? height : undefined}
              title={title || alt}
              fill={isBackground}
              alt={alt || ''}
              aria-hidden="true"
              className={imgClassName}
            />
          )}
        </div>
      )}
    </>
  );
};

export { ResponsiveImage };
