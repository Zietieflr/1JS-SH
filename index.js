fetch('http://bagel-api-fis.herokuapp.com/bagels')
//api means contract to request and receive 
  .then(response => response.json())
  .then(result => handleData(result))

  function handleData(data){
    data.forEach(bagel => createCard(data))
  }

  const bagelList = document.querySelector('#bagelsList')
  function createCard(type, rating){
    const card = document.createElement('li')
    renderBagelType(type, card)
    renderBagelRating(rating, card)
    card.append(renderBagelType, )
    bagelList.appendChild(card)
  }

  
  //create, manipulate, append
  function renderBagelType(data, card){
    const bagelTypeInfo = document.createElement('li')
    return bagelTypeInfo.textContent = data
    // bagelList.appendChild(bagelTypeInfo)
  }

  function renderBagelRating(data, card){
    const bagelRating = document.createElement('li')
    return bagelRating.innerHtML = data
    // bagelList.appendChild(bagelRating)
  }