import {Route, useParams} from 'react-router-dom';
import Comments from '../components/Comments/Comments';

export const QuoteDetails = () => {
  const {quoteId} = useParams('quoteId');
  return (
    <>
      <h1>Quote details page</h1>
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments></Comments>
      </Route>
    </>
  );
};
