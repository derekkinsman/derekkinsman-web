import * as ComponentBlock from '../pageBlocks';

//eslint-disable-next-line
export const DynamicBlocks = ({ blocks }: { blocks: any[] }) => {
  return (
    <>
      {blocks.map((block) => {
        const componentName = block.__typename.replace('Record', '');
        const PageBlock = ComponentBlock[componentName];

        return (
          // <section key={block.id} className={`component__${componentName}`}>
          <PageBlock key={block.id} {...block} />
          // </section>
        );
      })}
    </>
  );
};
