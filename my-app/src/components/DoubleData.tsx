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

interface graphSeriesPropsGraph {
    props: any;
}



export function DataSeriesGraph(     {props}: graphSeriesPropsGraph): JSX.Element {
    const { loading, error, data } = useQuery(QUERY_DATA, {
          variables: { 
          store: props.store,
          seriesFilter: props.seriesFilter 
      },
    });
  
  
  

    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    console.log(data);
    let gestimatesArr = data.gestimates.map(function(el: any) {
        return {
            
            date: el.date,
            gestimates: el.d
        }
    });
    //console.log(gestimatesArr)
    let revenueArr = data.revenue.map(function(el: any) {
      return {
            
            date: el.date,
            revenue: el.r,
      }
    });
  //console.log(revenueArr);

  let sellingArr = data.selling.map(function(el: any) {
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
              // @ts-ignore
            [curr.date]: { ...(acc[curr.date] ?? {}), ...curr },
          }),
          {}
        )
      );
    }
    
    const merged = merge(gestimatesArr, sellingArr);
    // @ts-ignore
    const merged2 = merge(merged, revenueArr);
    console.log(merged2);

    // @ts-ignore
    merged2.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    console.log(merged2);

    // merged2.push({date: "2021-02-15", gestimates: 4500, selling: 650, revenue: 11000});
    // merged2.push({date: "2021-02-16", gestimates: 4555, selling: 700, revenue: 11229});


  
    // let joinDataSecond = joinData.map((item, i) => Object.assign({}, item, sellingArr[i]));
    // console.log(joinDataSecond);
  
  

    // @ts-ignore
    return (
      <div className="data">
      <GraphSeriesGDownloads data={merged2} />
      <GraphSeriesGRevenue data={merged2} />
      </div>
    );
  }

