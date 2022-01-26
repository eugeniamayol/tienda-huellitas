const productos = [
    {
      "name": "Collar Mar",
      "price": 1000,
      "id": "100",
      "categories": "collares",
      "photo": "https://cdn.shopify.com/s/files/1/0185/9786/products/1_Yaxha_Azul_Frente_sin_mo_o_1300x1300.jpg?v=1619234063",
      "stock": 3,
      "description": "Collar para perro regulable color azul. Ancho 4 cm. Cuenta con hebilla de metal reforzada. No incluye chapita identificadora. Este modelo es para un perro de raza chica."
    },
    {
      "name": "Collar Love",
      "price": 1300,
      "id": "101",
      "categories": "collares",
      "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUERISFRUYGBgSERgUGBIYEhgYEhkSGRgZGRgZHBgcIS4lHB4uHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTQBDAwMEA8QHhISHzEsJSs0NDQ0NDY0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDExNDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABDEAACAQIDBAgDBAcHBAMAAAABAgADEQQSIQUxQVEGEyJhcYGRoQcyQlKxwfAUYnKCktHhFRczU1ST0iOywvFDY6L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAlEQEBAAIBBAIBBQEAAAAAAAAAAQIRIQMEEjFBUSITFDJxoWH/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQESLxeBMTzeLwPUTzeLwPUSLxeBMSLxeBMSLyYCIiAiIgIiICIiAiIgIiICIiAiIgRESICRJkQEReICIvEBJkRAmIiAkyJMBERAmJEQJiIgIiICIiAiIgIiQTARMDt3pXg8GctapZrXFNQWe3Ow3ec0rafxbUXFCh4NUb/wAV/nLMbU26lKdWsii7MFHMkAe84Nj/AIh7Rq3/AOr1YP0ogX31PvNdxW0qtQ3d3cnizlvvMvicvoLHdLcBRvnxCEj6UbO3osxGI+JOz1+Uu/hTt/3WnC+sk5pfGDsdT4qYYfLRqHxKD8ZTHxVpf6dv9wfynIQ89Bo8YOwU/ijQO+i48HUzIUPiPgm+YOvioP3GcSDT0DHjB9AYTpfgKm6uqnk4Ke50mbpVVcBlYMDxUgj1E+Zlc8DMjszbWIw7Bqbsv7LW9RuPnJ4j6LkzTeiPTJMSFp1SA50Dbgx5EcD7GbjM2aVMRECYkSYCIiBMSJR/SU17Q0366DzgV4mA2n0rwmHqLSdyajWsiqTv3a7veeNu9KaOGp5jdnYdmnuY+u4d8JtsMTkGI+JWJBJAprf6bFz3a3ExVbpLtPGkhXcIPmIIp01H6xFvxmpjV5di2jtvDYcE1ayJbgWu38I1mr4r4k0DcYejUrEfVbJT/ibX2nM6j0qRJZjXfzFIHw3t5y0xO0aj6E2HBVFl9BNTGJy3XaPTzHNcK1GgOSqalQfvNp7THbC6X16WKVqmIqVVc5GVzdddxUfSb8pprMTIptZlPJgfQxZNGm8/EuqlcUaxplHBZL5h2ktcXt3zn5pryPrOg9NFz4Sm3J1PqJoJEmF4VSNEd88tQ7z6StaTrNC0akZ5IYcJfSCByjYsQ89h5cmiDKT4UjdKotSVEeWrKRJR4F+rT1LVHlyhvIi72bijTcNfTc1uI/mN87r0U2qa9FVc3dBa/wBoC2vuPWcCCzq3QeoVaiDftPlPnRYn3VZLOD5dFkyInMTERAmJEQNZXD43E6uepQ/TvYj9n+ZnPenWGq0MQaK16hUgP8xHzDUWXQ7p2maZ8RcGrUUq2GZGt35Tr94943rlvp4zLKSuQlmBBszsu52JJFuV5GLxFes2aq7NYBdTcgDcJe131uBaUcLhWrVqdJPmqOF9d58hc+US2vZ+3ww5vK52Zsank/SatxSuQq/XUYbwDwUcT6S32htRqgyIAlNflprotvxPeZl+mlUCquHTRKNNUVR9kaD8TNbWmT4TrI8eeW7/AMUgOU9hJXWnwnmuSo03wzNb5WrzyRCJYSTuhG9bWGfZ1+SI3pOfV2K2sJ0TCDPsy3/0kek0C0zh8kQok5YEkTQjLJNhvNpInmpTzCxgesoIvJAP9JFJABaVcsIpNTU7xb7pQqYQjUS9EAcv6QrF5bHWV6Ty7dFO8W7xulXCbKZmF/ltfT5iO7kO8+8G1fZ9DObn5QfU/Z/nOjdCVL1ww1Sgp14NWqaNbuVVt/FNMwuHLnq6Ysi9lnHyjmqnnzM6D0SalRPU3UMEVgcw7V7qygcMtl0/rMZZc6dsejfG5318N4EmeKZ0E9zLiSZEQJiIkFPqB3+pljj9mUnpuClyUO49rduBmTiVZdXbgm1HormVKdUODazFcoPG8r9DbDG0iRrke2v15Gt+PrMv8QcAKWJZwNKnbt3nf7zWtlVcmJoPwWshP7OYBvK15mXl9Dx8sN73uMv0vwud0rJqD2H7jvUnxBmuU6i5ygGo3mbntxGw1dlPaRuJHYKm+h7uN+BPK0199kjrGqUyTn16s/OD+qdzjw1nbG7j51xuN1WPcSjUUS6r6ErbXiDpY98zOwehuJxdntkQ/wDyODY/srvb7pUam/G0usDsfE4g2pUnfvVTl/i3TsuyOguDoWLJ1rj66mov3JuE2anTVRZQABwAsJm5Q5c96P8ARvEphloVFysQwOoIAbdciY/+6mp/qV/2j/ynVImZdGnK2+FD8MSv+0f+UoVfhXiB8temfFWH851uJfKmnFq/w2x6/L1b+FSx9xMVieiG0KerYdyBxWzfcZ36Uq9ZEXM7Kij6mYKvqZfI0+b62HqIbOjKeTKVPvPAadr2z0u2YqlXZa5+wlMVL/vHs+85b0i2rhHYvSwooqNdXNz+4LAS72MUqkmwFzyGplelhWzqCBv1S92t4DcfG022v0Y6rZ36RUbJWZEcYfL2FDkAKwBHasbk2NrEa2vNXwGCxeIH+Ug3sRl9huPdv7pPKOmHTyzv4xdrh6CMWY2v8tMEPV7hoMq8N+Y90yNLAVH+cdWh16sG9V77s7bx/WXuytnU6VlQEXID1Dq5Pmez/S15evUVL5Tcbs28k/ynO579Pf0+0mN/Lm/4talRcOtsgAUDs/SEsbm/2rgTL9EtmszJtFzbMjLTpHXKrdkOTzIvpbQEHjNf2wjVKNRQLu630tr3zfOj9ZDhcNlGVTRRQCSWDqoUqSTpex4TMid5bjjJGbXaNFXSkzqruuZUJsWW9ri++X05B8VKgOIw40zLTbce0BmAFz5H0mK2L04xuGsufrUH0VLk27n3idfHh853STNP6O9PcNimWmwNOoxsFbVGPcw/G02+Z1oTERA9ReWWO2jSord3A5LvY+AGswTbUxWJJXDp1abusb5/LgPeBafEZKbUFtY1g4yKNWI435DjNc2L0Dr1gtWrVFMEghQmZyBxuSAJktu4alhVUVarO9Q3I424m51llV28xNOmlVnJ7K01FlHLMYmnfH9Tx1Lwze36SMxVtQAQRx46+t5qOJ2Zk/wXyjeabqWpW53tdPumy4ihUCrnZWYqGbKbgb9LzGbZoVKFNarjsOQpe57N92aw0G+Z3Zdx6MZjcZjmwjNXWxaizZdQyZa6C3ccxHhYTLYf4hYlLK3VtbSz02pt4aED2limKF85Aa6mzZiCO8FTKLuuU3uWJJzGx1J04ffeXz37i3ssfitkp/EpuOHRv2a9vvWXa/EhPqw7/u1UP32mlNhKLMoKqLkZnIGUjiQBbKe4+8h9j0yflyrr2rrm8hfdew8xHlPpi9lftvH95FD/AE1b1T/lPJ+JNHhh6v8AEg/GaGuyaZBJY7wFIY66XN+XLznldl0yLkkHlnJ04cN/dHlj9J+yy+43er8S/s4Vv3qyj7lMx2K+JeJ+mjRTveozn0Fpq/8AZ9IKCbXsdLkrv01npcFTtcKoPHS4+/UekeU+lnZW+7F1jOneNe4/Sco5UaYB8msT7zB18VWrNmOd2+3UcsfczLjDoBbQHmAB6WEqOl7C24g30sG4G++4/EyXqfUdsOwx+awiYCu2XMwUNe1u7frrzmydGejFF8SjOM60stVibMGa90TXmR36Aymqs11JHDUb78JtXRhAppEDWpWYk/qUUz/9zGYuWVb6/R6fS6V1OVr0y2gXqDD78pzVLHTOflU23gKb/vDlMbQIK3J+UWVb2Ud3cNeEscVWz1alQNfO7Nm4HMb7/butLvCdoEeHhykr09vh44TFXxGbss1guS2gFyARYhbi9uffKFOoL3O7l3StjUBXVyADYC+p7J4cBoBpzHKWvWs2rEkgAC5vYAaDukbnpd0dTYaC2vmd34zL7Mxf6OCA3Yd7hG1Csd5Hde585hqLW7fIDTvuPbdMf0i2kUQoN9S4BtoFGhIJG/ePMzpjLeI8Xc3HW6wnSbaRxGKqVLgqDkUgWBVdLgd5ufOYm885pBad3yrdq1GqVYEEgg3BG8EbjO1dBela4un1bkCsg1/XX7Q7+c4eDL3ZmOqUKtOqjWdGBB/A90lm2pZ6r6Sic1/vIb/LX1iY03+n/Tadm7KQAPVBdzqb6695O+ZxWAAAWwHDdJAiHFjNp7Lo4gg1EBI3HiPOYan0LwyVOsQuD+1NrYTxGo3j1MsfVatjtlph0DIT2nANze5OlvS8zNajTq0TTYBkqU7ZbmxU2/I8JcYzDipTamdMw3jeDwM1ZNpth89KsHujjIUN1A4Gxt4iS8N/l1Jx7jS3wL4TEvhy3YN3pOdzU+V/T8iVKldl1Hcb2B3d27fxmwdNaiPgkqqAXWsrUXFrntEOp4kFWYkHcQOU1HrSP6c5m8Pf2+dyx/L3FZqjE67zqSRqe8857VmFwCLGxsDpfXuI/wDctjVOn536755ateR6V0zW43vv/PGeNWIAuSSAFA1LHQAW3nhKAqWv/KXuzcWtOrTqEaKwJ5jhf3v5SsZbktiKuxcfc5aSAgZhTNZDUy87XNtx4y6wnRvG1qYd/wDpC9ggXPUb9bIpAt+95TotGqrqttxsbqfmDAWXNx0leigUkrmO4XL5jv0AA5AHWXT517rqfDm+O2HiMOqs7rURjbrACrAkXsykn2vrpyvZXm6dMcUgw+XNrUqWCg6WBDFjy3e80MEcB+Jma+n2meWeG8l3TO6/n+fX0m2bF0p0WtdVw+IYEcyagPnZVmlgkbzvN/K86R0VbNs1gLXArLca6nMfxjH2x338J/bn+KZSb2Kk91lNrC4HAHfJwlYg7/zcS2xdZiqkkWGgI1NyASLDx9zPODJZgAN5sOEz8PThx7ZWq+YXIvyHAC//ALPjLbD07qTyI1JsO/z7vGXNKm7nIiM53ZVF72N9TuGo3nTSZ/Z/RklusxFt9xQT/DF/tH6vAaeM1jjby8/X7rDpbk5qhsHZBxDZrlKObtPftOR9KchzP47t3xOzcNUpii9NGQCwQgEAd3KWPVWAA0AFgBoAPCeWpHmfWdZJHx+p1cs8t1qe3vhjTbM+FqZDv6tzdPANvHvOa7W2RiMNU6uqhVuHEMOakb53FsKx+pvUyzrbFDsGa7FdxbUj1mpXPblmzuiGPrAMmHex+prILfvG82DA/DPGMRnamgvqcxZgPAC1/OdNwvWKALkzIU3PGS5G2of3c4T7T+oibnmkSbqkGerSLSCm0pNK5SeSkot2aYrbWzkxCb8jgWV7aEfZbmszLU5QqUYWWy7jlO0sP1TmnVU034G2ak/6wPpuv4CY96LjcA19Rl7f3TqmP2ctRCjqGU/SwuP6HvmmbQ6FEEmi7J+q3aXyO8e8lxl9PX0+6s/lGqitrY8/zpwkE+0yOJ2JtFENPIHS97IRqfOxmPxD11cM+GcZb6CmQnnlFjM+NenHusL8oDz0ZZNjkBOZbX+kggD0IkptCmL3F7nibachrHjfpr9fD7bNsTpDUw4CntoCSovqjHivqdD7Tam6V4YoDnbQC6GmRU3G5V1Nrk/dbScwTGodApY66gXb8+UuqQrMAEw9VtLXFF2J4bwvjLq/ThnOhld2sztfazYh87blGVVvey+m82ExucgXsbZgt7Heb2HjodJdYfYe0XFlwzgEW7bKgt3hiCfSZbD9B8a/+JVpU/DM7AeFlHvJ412nddHCajX2RtCdx4XFx3nlOh/DvEr1NalmDZamYgfZdQPvUy1wfQDCrY1atSqeK5glP0Xtf/qbFgNl4bDqRQpol7XKjtMBwZjq2/iYmOnn6/dzqzxkc3xWw8RTbEEIUo0yVapUa1NgrDLlG9ySFsAN9heZ3op0YZ6a1sSCCwzKgJU2P2hvGltxGhmz7Q2cMRUpZ2vTpuXNK2jvbsX7hrp3mZZJdRxvc9Sz2oUcKqKFRQoHACwlYU56vPV5p57ypimJ66sT2J6ECn1YnoUxKlotCaeQk9hYAkgSLpFok2iFe7SLSpECnaRaVLRaBSKyCkrWi0C3NOeDhxLrLFoFicIOU8nBLymQyyMsuxjG2XTO9FPiBKf9h0P8tP4RMvljLGxi12TTG5beBIlQbOTv/iMyGWMsbppY/wBnp+SZIwCcveXuWLRsWYwg5SRhRLy0WjYopQUcINOVrRaQUOqkinK0QKYWTae7RaB4tJtPUQPNotPUQPNonq0QPUREBERAREQEREBERAREQEREBERAREQEiTECIkxAiJMQIiTECIiICIiBMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQIiTEBIkxAiJMQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z",
      "stock": 7,
      "description": "Collar para perro regulable color azul. Ancho 4 cm. Cuenta con hebilla de metal reforzada. No incluye chapita identificadora. Este modelo es para un perro de raza chica."
    },
     {
      "name": "Collar Personalizado",
      "price": 1500,
      "id": "102",
      "categories": "collares",
      "photo": "data:image/jpeg;base64,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",
      "stock": 50,
      "description": "Collar para perro regulable color azul. Ancho 4 cm. Cuenta con hebilla de metal reforzada. No incluye chapita identificadora. Este modelo es para un perro de raza chica."
    },
    {
      "name": "Casita Dulce Hogar",
      "price": 15000,
      "id": "200",
      "categories": "casitas",
      "photo": "https://i.pinimg.com/originals/ed/a1/e2/eda1e2c32035ba5afc34d14346b90d10.jpg",
      "stock": 9,
      "description": "Cucha de diseño tradicional con base elevada para mejor aislacion del frio y la humedad. Ideales para gatos y perros hasta 5 Kg de peso dependiendo de la contextura de cada animal. "
    },
    {
      "name": "Casita Luxury",
      "price": 65000,
      "id": "201",
      "categories": "casitas",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKwsyoXXyzpxiVqB_DkKtMxOQr3Xx71pawQ&usqp=CAU",
      "stock": 1,
      "description": "Cucha de diseño tradicional con base elevada para mejor aislacion del frio y la humedad. Ideales para gatos y perros hasta 5 Kg de peso dependiendo de la contextura de cada animal. "
    },
    {
      "name": "Casita Algodón",
      "price": 20000,
      "id": "202",
      "categories": "casitas",
      "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwkD-U3Wen70-q_iJgilMwURle8hxjevDJw&usqp=CAU",
      "stock": 2,
      "description": "Cucha de diseño tradicional con base elevada para mejor aislacion del frio y la humedad. Ideales para gatos y perros hasta 5 Kg de peso dependiendo de la contextura de cada animal. "
    },
      {
      "name": "Casita Sweet",
      "price": 5300,
      "id": "203",
      "categories": "casitas",
      "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWPAcsItykwyVMa-KOp7VIezKlRkbNWbGDw&usqp=CAU",
      "stock": 15,
      "description": "Cucha de diseño tradicional con base elevada para mejor aislacion del frio y la humedad. Ideales para gatos y perros hasta 5 Kg de peso dependiendo de la contextura de cada animal. "
    } ,
    {
      "name": "Casita Cat",
      "price": 7800,
      "id": "204",
      "categories": "casitas",
      "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEHmRzj2IUNlOvo63WenQ2MQJJ68rFA7YAw&usqp=CAU",
      "stock": 9,
      "description": "Cucha de diseño tradicional con base elevada para mejor aislacion del frio y la humedad. Ideales para gatos y perros hasta 5 Kg de peso dependiendo de la contextura de cada animal. "
    },
    {
      "name": "Comedero Paris",
      "price": 2000,
      "id": "300",
      "categories": "comederos",
      "photo": "http://d3ugyf2ht6aenh.cloudfront.net/stores/555/698/products/preview-tienda-nube-2-0-921-e2460a53373f3bdad615384262641683-640-0.jpg",
      "stock": 12,
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, nihil enim quidem quaerat ipsum laborum a, similique earum doloribus aliquid aliquam fugiat at est dignissimos, aut vero possimus porro molestias?"
    },
     {
      "name": "Comedero Roma",
      "price": 3400,
      "id": "301",
      "categories": "comederos",
      "photo": "data:image/jpeg;base64,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",
      "stock": 8,
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, nihil enim quidem quaerat ipsum laborum a, similique earum doloribus aliquid aliquam fugiat at est dignissimos, aut vero possimus porro molestias?"
    },
       {
      "name": "Comedero Tradicional",
      "price": 1500,
      "id": "302",
      "categories": "comederos",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0phTcxqsq_VH_3B6XbEn0zryaG_veZNfMg&usqp=CAU",
      "stock": 4,
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, nihil enim quidem quaerat ipsum laborum a, similique earum doloribus aliquid aliquam fugiat at est dignissimos, aut vero possimus porro molestias?"
    }
  ]
  
export const traerProductos = new Promise ((resolve, reject) => {
    let condicion = true;
    if(condicion){
        setTimeout(()=>{
            resolve(productos);
        },2000)
    }else{
        reject("error");
    }
})
