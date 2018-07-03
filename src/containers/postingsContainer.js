import Postings from '../pages/postings'

const mapStateToProps = (state) => {
    return {
        title: state.postings[0].title,
        content: state.postings[0].content,
    }
}

const Container = connect(mapStateToProps)(SkiDayCount)

export default Container
