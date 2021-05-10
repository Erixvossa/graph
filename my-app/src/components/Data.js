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




function Data({ props }) {
  const { loading, error, data } = useQuery(FEED_QUERY, {
        variables: { 
        store: props.store,
        seriesFilter: props.seriesFilter 
    },
  });


//   const dataTest = [
//     { date: '1991', value1: 3 },
//     { date: '1992', value: 4 },
//     { date: '1993', value: 3.5 },
//     { date: '1994', value: 5 },
//     { date: '1995', value: 4.9 },
//     { date: '1996', value: 6 },
//     { date: '1997', value: 7 },
//     { date: '1998', value: 9 },
//     { date: '1999', value: 13 },
//   ];

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <div name="data">
        {data.series.positions.map(({ date, value }) => (
            <p key={date}>{`${date} ${value}`}</p>
          ))}
    <Graph data={data.series.positions} />
    </div>
  );
}

export default Data;