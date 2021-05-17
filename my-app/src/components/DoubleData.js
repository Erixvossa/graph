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
    console.log(data);
    let gestimatesArr = data.gestimates.map(function(el) {
        return {
            
            date: el.date,
            gestimates: el.d
        }
    });
    //console.log(gestimatesArr)
    let revenueArr = data.revenue.map(function(el) {
      return {
            
            date: el.date,
            revenue: el.r,
      }
    });
  //console.log(revenueArr);

  let sellingArr = data.selling.map(function(el) {
    return {
          
          date: el.date,
          selling: el.d
    }
  });
  //console.log(sellingArr);
    // let joinData = gestimatesArr.map((item, i) => Object.assign({}, item, revenueArr[i]));
    // console.log(joinData);


    
    function merge(arr1 = [], arr2 = []) {
      return Object.values(
        arr1.concat(arr2).reduce(
          (acc, curr) => ({
            ...acc,
            [curr.date]: { ...(acc[curr.date] ?? {}), ...curr },
          }),
          {}
        )
      );
    }
    
    const merged = merge(gestimatesArr, sellingArr);
    const merged2 = merge(merged, revenueArr);
    console.log(merged2);

    merged2.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    console.log(merged2);


  
    // let joinDataSecond = joinData.map((item, i) => Object.assign({}, item, sellingArr[i]));
    // console.log(joinDataSecond);
  
  
    return (
      <div name="data">
      <GraphSeriesGDownloads data={merged2} />
      <GraphSeriesGRevenue data={merged2} />
      </div>
    );
  }

