import styled from "@emotion/styled";

export default styled.section`
  $unit: 2.5em;
  position: absolute;
  margin-top: 2em;
  width: $unit;
  height: $unit;
  background-color: $primary;
  border: 0.2rem solid $white;
  border-radius: $unit;
  text-decoration: none;
  font-size: 1em;
  font-weight: 700;
  color: $white;
  box-shadow: $box-shadow;
  z-index: 3;
  top: -60px;
  left: -20px;

  &_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &_dropdown {
    background-color: $white;
    padding: 1.5em 1em;
    border-radius: 0.8rem;
    box-shadow: $box-shadow;
    position: relative;
    font-size: 1rem;
    // top: 37%;
    // z-index: 1;
  }
`;
