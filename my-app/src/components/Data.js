import { useQuery, gql } from '@apollo/client';

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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div name="data">
        {data.series.positions.map(({ date, value }) => (
            <p key={date}>{`${date} ${value}`}</p>
          ))}
    </div>
  );
}

export default Data;