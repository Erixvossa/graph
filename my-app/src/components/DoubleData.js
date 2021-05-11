import { useQuery, gql } from '@apollo/client';
import Graph from './Graph';


const FEED_QUERY = gql`
query series ($store: String!, $seriesFilter: SeriesFilter!) {
    series {
    positions(store: $store, filter: $seriesFilter) {
        date
        value
        }
    }
}
`;

const DOUBLE_QUERY = gql`
query series ($store: String!, $seriesFilter: SeriesFilter!) {
  selling:positions(store: $store, filter: $seriesFilter) {
      date
      d
  }
  gestimates(store: $store, filter: $seriesFilter) {
      date
      d
  }
}
`;




function DoubleData({ props }) {
  const { loading, error, data } = useQuery(DOUBLE_QUERY, {
        variables: { 
        store: props.store,
        seriesFilter: props.seriesFilter 
    },
  });




  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
//   console.log(data);
  let gestimatesArr = data.gestimates.map(function(el) {
      return {
          gestimates: el.d,
          date: el.date
      }
  });
//   console.log(gestimatesArr)
  let sellingArr = data.selling.map(function(el) {
    return {
        selling: el.d,
        date: el.date
    }
});

  let joinData = gestimatesArr.map((item, i) => Object.assign({}, item, sellingArr[i]));
//   console.log(joinData);


  return (
    <div name="data">
        {/* {data.series.positions.map(({ date, d }) => (
            <p key={date}>{`${date} ${d}`}</p>
          ))} */}
    <Graph data={joinData} />
    </div>
  );
}

export default DoubleData;