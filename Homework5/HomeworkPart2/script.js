let book = {
  title: prompt("Book title:"),
  author: prompt("Author:"),
  readingStatus: prompt("Have you read the book? Enter yes or no only."),
  getInfo: function () {
    if (this.readingStatus === "yes") {
      alert(`Already read '${this.title}' by ${this.author}.`);
      return;
    }

    alert(`You still need to read '${this.title}' by ${this.author}.`);
  },
};

book.getInfo();
