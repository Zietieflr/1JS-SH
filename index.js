fetch('http://bagel-api-fis.herokuapp.com/bagels')
//api means contract to request and receive 
  .then(response => response.json())
  .then(result => handleData(result))

  function handleData(data){
    data.forEach(bagel => createCard(bagel['type'], bagel['rating']))
  }

  const bagelsList = document.querySelector('#bagelsList')

  function createCard(type, rating){
    const card = document.createElement('li')
    // renderBagelType(type, card)
    // renderBagelRating(rating, card)
    card.append(renderBagelType(type), renderBagelRating(rating))
    bagelsList.appendChild(card)
  }

  
  //create, manipulate, append
  function renderBagelType(data){
    console.log('type', data)
    const bagelTypeInfo = document.createElement('li')
    return bagelTypeInfo.innerHTML = data
    // bagelList.appendChild(bagelTypeInfo)
  }

  function renderBagelRating(data){
    console.log('rating', data)
    const bagelRating = document.createElement('li')
    return bagelRating.innerHTML = data
    // bagelList.appendChild(bagelRating)
  }