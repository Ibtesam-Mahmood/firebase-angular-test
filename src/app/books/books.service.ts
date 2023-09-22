import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks(): Book[] {
    return [
      {
        id: 1,
        name: 'Angular',
        author: 'Youtube',
        url: 'https://i.ytimg.com/vi/wkhClyW5uMc/maxresdefault.jpg',
        amount: 20,
      },
      {
        id: 2,
        name: 'Angular Logo',
        author: 'Google',
        url: 'https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg',
        amount: 10,
      },
      {
        id: 3,
        name: 'Photography',
        author: 'Unsplash',
        url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        amount: 30,
      },
      {
        id: 4,
        name: 'Eiffel Tower',
        author: 'France',
        url: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        amount: 21,
      },
      {
        id: 5,
        name: 'Heart Cloud',
        author: 'Universe',
        url: 'https://media.istockphoto.com/id/1367357589/photo/red-heart-shaped-sky-at-sunset-beautiful-landscape-with-flowers-love-background-with-copy.jpg?s=612x612&w=0&k=20&c=VbyUaFaEvR_hAGtDmcbyw7X3E7KPVmW4GYxEYjbBGOk=',
        amount: 30,
      },
      {
        id: 6,
        name: 'Sisyphus',
        author: 'Modern Greek Art',
        url: 'https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=',
        amount: 11,
      },
      {
        id: 7,
        name: 'Birds',
        author: 'Nature',
        url: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?cs=srgb&dl=pexels-pixabay-45853.jpg&fm=jpg',
        amount: 18,
      },
      {
        id: 8,
        name: 'Baby Sloth',
        author: 'Nature',
        url: 'https://i.natgeofe.com/n/28f65c83-cb91-4489-ba1e-b62c76863c43/01_slothlove_leaves.jpg?w=1084.125&h=721.875',
        amount: 27,
      },
      {
        id: 9,
        name: 'Northern Lights',
        author: 'Photons',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWdNjWWvursg4U2qqsudGRkBoYwyq4K-6yg&usqp=CAU',
        amount: 64,
      },
      {
        id: 10,
        name: 'US History',
        author: 'Lincon Park',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_0FSQJeCnNVtqFioAiQoV9c1MRHMFuSp3Q&usqp=CAU',
        amount: 42,
      },
      {
        id: 11,
        name: 'Cool Catz',
        author: 'Nyan',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOi6B1EjD4lkdZg4ClLhWTxjsfVQVRsdW1aw&usqp=CAU',
        amount: 136,
      },
    ];
  }
}
