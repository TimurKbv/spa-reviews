import React from "react";
import { connect } from "react-redux";
import reviewsData from "../data/reviews.json";
import ReviewList from "./ReviewList.component";
import Pagination from "./Pagination.component";
import { Review } from "./ReviewItem.component";

interface MainProps {
  lang: "ru" | "en";
}

interface MainState {
  currentPage: number;
}

class Main extends React.Component<MainProps, MainState> {
  private reviewsPerPage = 10;

  constructor(props: MainProps) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  setCurrentPage = (page: number) => {
    this.setState({ currentPage: page });
  };

  formatName = (fullName: string): string => {
    const nameParts = fullName.split(" ");
    if (nameParts.length === 1) return fullName;
    const lastName = nameParts[0];
    const firstNameInitial = nameParts[1][0];
    return `${lastName} ${firstNameInitial}.`;
  };

  render() {
    const { lang } = this.props;
    const { currentPage } = this.state;

    const reviews: Review[] = Object.values(reviewsData[lang]);

    const indexOfLastReview = currentPage * this.reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - this.reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / this.reviewsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <main className="container mx-auto mt-8">
        <ReviewList reviews={currentReviews} formatName={this.formatName} />
        <Pagination 
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={this.setCurrentPage}
        />
      </main>
    );
  }
}

const mapStateToProps = (state: { lang: "ru" | "en" }) => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(Main);