class Aquarium {
  constructor (
    id,
    name,
    width,
    height,
    depth,
    imageUrl,
    volume,
    type,
    parameters,
  ){
    this.id = id,
    this.name = name,
    this.width = width,
    this.height = height,
    this.depth = depth,
    this.imageUrl = imageUrl,
    this.volume = volume,
    this.type = type
    this.parameters = parameters
  }
}

export default Aquarium;
