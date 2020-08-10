import React from "react";
import Page from "../../Page";
import HeroBasic from "../../HeroBasic";
import ProjectFeature from "../../ProjectFeature";
import FeatureApp from "../../FeatureApp";

export default () => {
  return (
    <Page>
      <HeroBasic
        img={{
          src: "/images/resolution/procurement_timeline_graph.gif",
          alt: "People working in an office",
        }}
      />{" "}
      <article className="blog">
        <h2>
          This graph lets the Project Manager quickly view the status of a
          project.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          commodo odio aenean sed adipiscing diam donec adipiscing tristique.
          Enim praesent elementum facilisis leo vel fringilla est. Et malesuada
          fames ac turpis egestas. Id eu nisl nunc mi ipsum faucibus vitae.
          Augue mauris augue neque gravida in fermentum. Vel fringilla est
          ullamcorper eget. Habitasse platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim. Laoreet sit amet cursus sit
          amet. At tellus at urna condimentum mattis pellentesque. Pharetra
          massa massa ultricies mi quis hendrerit dolor. Ornare lectus sit amet
          est. Orci nulla pellentesque dignissim enim sit. Pharetra diam sit
          amet nisl suscipit. Quam adipiscing vitae proin sagittis nisl rhoncus
          mattis.
        </p>
        <p>
          Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Massa
          tincidunt dui ut ornare lectus. Elementum nibh tellus molestie nunc
          non blandit massa. Volutpat maecenas volutpat blandit aliquam etiam
          erat velit scelerisque. Urna cursus eget nunc scelerisque viverra
          mauris in aliquam sem. Placerat vestibulum lectus mauris ultrices eros
          in cursus turpis. Aenean sed adipiscing diam donec adipiscing
          tristique risus nec feugiat. Eleifend mi in nulla posuere sollicitudin
          aliquam ultrices. Porta non pulvinar neque laoreet suspendisse
          interdum. Tempor commodo ullamcorper a lacus vestibulum sed arcu non.
          Nibh sed pulvinar proin gravida hendrerit lectus a. Eget velit aliquet
          sagittis id consectetur purus. Massa placerat duis ultricies lacus.
          Imperdiet dui accumsan sit amet nulla facilisi. Arcu dictum varius
          duis at consectetur. Praesent elementum facilisis leo vel. Sem viverra
          aliquet eget sit amet. Nunc sed blandit libero volutpat sed cras
          ornare arcu dui. Tincidunt praesent semper feugiat nibh sed pulvinar
          proin gravida.
        </p>
      </article>
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "Procurement",
          descLg:
            "This graph makes it easy for the project manager to view the status of a project.",
          desc:
            "Each segment represents a month of the timeline. The green represents the funding for the project. The blue is how much money has been spent so far. The yellow represents how much has be invoiced so far.",
        }}
        img={{
          src: "/images/resolution/circle_chart3.png",
          alt: "",
        }}
      />
      <article className="blog">
        <p>
          Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
          Nulla aliquet porttitor lacus luctus accumsan tortor. Iaculis at erat
          pellentesque adipiscing commodo elit at imperdiet dui. Orci ac auctor
          augue mauris augue neque gravida. Eget nullam non nisi est sit amet
          facilisis. At volutpat diam ut venenatis tellus in. Nisl condimentum
          id venenatis a condimentum vitae. Consequat semper viverra nam libero
          justo laoreet. Sapien pellentesque habitant morbi tristique senectus
          et netus. Pellentesque eu tincidunt tortor aliquam nulla facilisi
          cras. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
        </p>
      </article>
      <FeatureApp
        img={{
          src: "/images/resolution/procurement_timeline_graph.gif",
          alt: "",
        }}
        themeColor="mediumTheme"
      />
      <article className="blog">
        <p>
          Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
          Nulla aliquet porttitor lacus luctus accumsan tortor. Iaculis at erat
          pellentesque adipiscing commodo elit at imperdiet dui. Orci ac auctor
          augue mauris augue neque gravida. Eget nullam non nisi est sit amet
          facilisis. At volutpat diam ut venenatis tellus in. Nisl condimentum
          id venenatis a condimentum vitae. Consequat semper viverra nam libero
          justo laoreet. Sapien pellentesque habitant morbi tristique senectus
          et netus. Pellentesque eu tincidunt tortor aliquam nulla facilisi
          cras. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
        </p>
      </article>
    </Page>
  );
};
