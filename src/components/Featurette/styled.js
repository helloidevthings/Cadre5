import styled from "@emotion/styled";

export default styled.section`
  background: linear-gradient(
    white 30%,
    ${(props) => props.theme.color.light} 30%
  );

  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 2rem;

    article:nth-child(2) {
      align-self: flex-end;
    }
  }

  .title-wrap {
    h4 {
      margin-bottom: 0;
    }
  }

  .item {
    margin: 1rem auto;
    max-width: 28em;
    padding: 1rem;
  }

  figure {
    margin-bottom: 1em;
    img {
      width: 100%;
    }
  }

  h4,
  h5 {
    font-weight: 500;
    line-height: 1.5;
  }

  blockquote {
    max-width: 28em;
    margin-top: 3em;
  }
`;
