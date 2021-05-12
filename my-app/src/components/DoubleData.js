import { useQuery, gql } from '@apollo/client';
import { GraphSeriesGDownloads, GraphSeriesGRevenue } from './GraphComponents';



const QUERY_DATA = gql`
query series ($store: String!, $seriesFilter: SeriesFilter!) {
  selling:positions(store: $store, filter: $seriesFilter) {
      date
      d
  }
  gestimates(store: $store, filter: $seriesFilter) {
      date
      d
  }
  revenue:gestimates(store: $store, filter: $seriesFilter) {
        date
        r
    }
  }
`;


export const DataSeriesGraph = ({ props }) => {
    const { loading, error, data } = useQuery(QUERY_DATA, {
          variables: { 
          store: props.store,
          seriesFilter: props.seriesFilter 
      },
    });
  
  
  

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    // console.log(data);
    let gestimatesArr = data.gestimates.map(function(el) {
        return {
            gestimates: el.d,
            date: el.date
        }
    });
    // console.log(gestimatesArr)
    let revenueArr = data.revenue.map(function(el) {
      return {
            revenue: el.r,
            date: el.date
      }
    });
  
    let joinData = gestimatesArr.map((item, i) => Object.assign({}, item, revenueArr[i]));
    // console.log(joinData);

    let sellingArr = data.selling.map(function(el) {
      return {
            selling: el.d,
            date: el.date
      }
    });
  
    let joinDataSecond = joinData.map((item, i) => Object.assign({}, item, sellingArr[i]));
    // console.log(joinDataSecond);
  
  
    return (
      <div name="data">
      <GraphSeriesGRevenue data={joinDataSecond} />
      <GraphSeriesGDownloads data={joinDataSecond} />
      </div>
    );
  }

