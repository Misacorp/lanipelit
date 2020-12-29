class Recommendation {
  constructor(props) {
    this.content = props.content;
    this.author = props.author;
  }

  isEmpty = () => !this.content || !this.author;
}

export default Recommendation;
