export default class CountryService {

    getCountries() {
        fetch("http://localhost:3000/produtos", {
            headers: new Headers([
                ["Authorization", `Bearer ${localStorage.toke}`]
            ]),
  

        })
        .then(res => res.json())
        .then(function (res)
    
       
       
        {
            console.log('aqui')
        })
        
     
       
      
    }
}