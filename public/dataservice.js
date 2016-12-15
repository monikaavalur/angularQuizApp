(function(){

   
    angular
        .module("dogFacts")
        .factory("DataService", DataService);

     
    function DataService(){

        var dataObj = {
            dogsData: dogsData,
            quizQuestions: quizQuestions,
            correctAnswers : correctAnswers
        };

        return dataObj;
    }

    var correctAnswers = [1,1,3,3,0,2,1,1,1,3];

    var quizQuestions  = [
        {
            type: "text",
            text: "How much can a Golden Retriever weigh?",
            possibilities: [
                {
                    answer: "Up to 20 pounds"
                },
                {
                    answer: "55 to 75 pounds"
                },
                {
                    answer: "10 to 15 pounds"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the typical lifespan of a Collie dog?",
            possibilities: [
                {
                    answer: "2 years"
                },
                {
                    answer: "10 to 14 years"
                },
                {
                    answer: "12 to 15 years"
                },
                {
                    answer: "40 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Tibetan Mastiff dog?",
            possibilities: [
                {
                    answer: "http://www.pets4homes.co.uk/images/breeds/57/large/6b4396b2989a6559525aa4fdc322f2e7.jpg"
                },
                {
                    answer: "https://assets.vetary.com/media/seo_content/dog/havanese-med.jpg"
                },
                {
                    answer: "http://www.petsworld.in/blog/wp-content/uploads/2014/11/Komondor-Dog.jpg"
                },
                {
                    answer: "https://i.ytimg.com/vi/CtlxfR1B4qs/maxresdefault.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Lancashire Heeler dog?",
            possibilities: [
                {
                    answer: "http://cdn1-www.dogtime.com/assets/uploads/gallery/american-eskimo-dog-dog-breed-pictures/7-sitting.jpg"
                },
                {
                    answer: "http://www.yourpurebredpuppy.com/dogbreeds/photos-TZ/xoloitzcuintlef2.jpg"
                },
                {
                    answer: "https://s-media-cache-ak0.pinimg.com/originals/97/cf/ca/97cfcaa769f16767f3cb846071761533.jpg"
                },
                {
                    answer: "http://cdn2-www.dogtime.com/assets/uploads/gallery/lancashire-heeler-dog-breed-pictures/side-3_680-453.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "From where did Bolognese dog originate?'",
            possibilities: [
                {
                    answer: "Italy"
                },
                {
                    answer: "France"
                },
                {
                    answer: "Japan"
                },
                {
                    answer: "Germany"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which dog belongs to the breed of hounds?",
            possibilities: [
                {
                    answer: "American Eskimo dog"
                },
                {
                    answer: "Collie dog"
                },
                {
                    answer: "Dachshund dog"
                },
                {
                    answer: "Finnish Spitz dog"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which dog was known as a comapnion to the ancient Vikings?",
            possibilities: [
                {
                    answer: "Golden Retriever"
                },
                {
                    answer: "Icelandic Sheepdog"
                },
                {
                    answer: "Komondor dog'"
                },
                {
                    answer: "Maltese dog"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Norwich Terrier dog?",
            possibilities: [
                {
                    answer: "http://www.golden-retriever.com/wp-content/uploads/2015/06/Golden-Retriever-detailed-image.jpg"
                },
                {
                    answer: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2Fb0%2Fd0f060a7e411e0a0d50050568d634f%2Ffile%2FNorwich-Terrier-4-645mk062711.jpg"
                },
                {
                    answer: "https://s-media-cache-ak0.pinimg.com/originals/97/cf/ca/97cfcaa769f16767f3cb846071761533.jpg"
                },
                {
                    answer: "https://s-media-cache-ak0.pinimg.com/originals/66/68/93/66689395002d93df92277531e0220c9e.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which dogs are known to be proud, elegant and clever?",
            possibilities: [
                {
                    answer: "Skye Terrier Dogs"
                },
                {
                    answer: "Poodle dogs"
                },
                {
                    answer: "Xoloitzcuintli dogs"
                },
                {
                    answer: "old english sheepdog"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these dogs is a hybrid dog?",
            possibilities: [
                {
                    answer: "America Eskimo dog"
                },
                {
                    answer: "Havanese dog"
                },
                {
                    answer: "Finnish Spitz dog"
                },
                {
                    answer: "Yorkipoo dog"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var dogsData = [
        {
            type: "American Eskimo Dog",
            image_url: "http://cdn1-www.dogtime.com/assets/uploads/gallery/american-eskimo-dog-dog-breed-pictures/7-sitting.jpg",
            Dog_breed_group : "companion Dogs",
            Height : "7 inches tall at the shoulder",
            Weight : "Starts at 30 pounds",
            lifespan : "12 to 15 years",
            description: "Called “the dog beautiful” by his admirers, the American Eskimo Dog, or “Eskie,” is a striking fellow with his white coat, sweet expression, and black eyes. He’s a Nordic dog breed, a member of the Spitz family. Eskies are lively, active companion dogs who love to entertain and join in on all family activities. They are outgoing and friendly with family and friends, but reserved with strangers. Although the Eskie is a small dog — 10 to 30 pounds — he has a big-dog attitude."
        },
        {
           type: "Bolognese Dog",
            image_url: "http://cdn2-www.dogtime.com/assets/uploads/gallery/bolognese-dog-breed-pictures/puppy-8.jpg",
            Dog_breed_group : "companion Dogs",
            Height : "9 inches to 1 foot tall at the shoulder",
            Weight : "8 to 14 pounds",
            lifespan : "12 to 14 years",
            description: "Comical and curious, this intelligent and devoted dog loves to spend time with his people, whether it's going for walks, running errands, or playing with the kids. A member of the Bichon family of white, fluffy dogs — he's also known as the Bichon Bolognese — he originated in the Italian city of Bologna, from which he takes his name. He excels at manipulating people to get his way, and can be difficult to housetrain, so be patient and consistent."
        },
        {
            type: "Collie Dog",
            image_url: "http://www.pawculture.com/uploads/collie-main.jpg",
            Dog_breed_group : "Herding Dogs",
            Height : "2 inches tall at the shoulder",
            Weight : "50-70 pounds",
            lifespan : "10 to 14 years",
            description: "The Collie dog breed is a native of Scotland, mostly of the Highland regions but also bred in the Scottish Lowlands and northern England, where she was used primarily as a herding dog. She is a sensitive and intelligent dog, known for her undying loyalty and amazing ability to foresee her owner’s needs. She is a great family companion, and is still a capable herding dog."
        },
        {
            type: "Dachshund Dog",
            image_url: "http://www.pets4homes.co.uk/images/breeds/57/large/6b4396b2989a6559525aa4fdc322f2e7.jpg",
            Dog_breed_group : "Hound Dogs",
            Height : "8-9 inches tall at the shoulder",
            Weight : "16-32 pounds",
            lifespan : "12 to 15 years",
            description: "Dachshunds are scent hound dog breeds who were bred to hunt badgers and other tunneling animals, rabbits, and foxes. Packs of Dachshunds were even used to trail wild boar. Today their versatility makes them excellent family companions, show dogs, and small-game hunters."
        },
        {
            type: "English Springer Spaniel Dog",
            image_url: "https://s-media-cache-ak0.pinimg.com/originals/97/cf/ca/97cfcaa769f16767f3cb846071761533.jpg",
            Dog_breed_group : "Sporting Dogs",
            Height : "10 inches tall at the shoulder",
            Weight : "45 to 55 pounds",
            lifespan : "9 to 15 years",
            description: "The English Springer Spaniel dog breed was developed as a gun dog to flush, or spring, game in the field, but he’s also a popular companion. Athletic and versatile, he’s been known to participate in agility, hunt tests, tracking, obedience trials and more, and he’s a great pal to have along when you go hiking or camping."
        },
        {
            type: "Finnish Spitz Dog",
            image_url: "http://s3.amazonaws.com/assets.prod.vetstreet.com/b9/66/ca65213e4866b9fa1b22e14ec40f/finnish-spitz-ap-ws2hp4-645-x-380.jpg",
            Dog_breed_group : "Sporting Dogs",
            Height : "1 foot, 3 inches to 1 foot, 8 inches tall at the shoulder",
            Weight : "25 to 35 pounds",
            lifespan : "12 to 15 years",
            description: "Finnish Spitz were originally were bred to hunt a variety of small and large game, and then bark when they found something. Today they’re considered “talkative” companions who will keep you apprised of just about everything going on in your surroundings."
        },
        {
           type: "Golden Retriever Dog",
            image_url: "http://www.golden-retriever.com/wp-content/uploads/2015/06/Golden-Retriever-detailed-image.jpg",
            Dog_breed_group : "Sporting Dogs",
            Height : "9 inches to 2 foot tall at the shoulder",
            Weight : "55 to 75 pounds",
            lifespan : "10 to 12 years",
            description: "The Golden Retriever is one of the most popular dog breeds in the U.S. The breed’s friendly, tolerant attitude makes him a fabulous family pet, and his intelligence makes him a highly capable working dog. Golden Retrievers excel at retrieving game for hunters, tracking, sniffing out drugs, and as therapy and assistance dogs. They’re also natural athletes, and do well in dog sports such as agility and competitive obedience."
        },
        {
            type: "Havanese Dog",
            image_url: "https://assets.vetary.com/media/seo_content/dog/havanese-med.jpg",
            Dog_breed_group : "companion Dogs",
            Height : "8 inches to 11 inches tall at the shoulder",
            Weight : "7 to 13 pounds",
            lifespan : "12 to 15 years",
            description: "The Havanese dog breed has won many admirers with his long, silky hair, expressive eyes, and cuddly size. Bred as a companion dog to the Cuban aristocracy in the 1800s, he’s earned the nickname “Velcro dog” because he sticks so closely to his owner’s side. But don’t write him off as just a lapdog; the Havanese is trainable and surprisingly energetic, and has excelled in dog sports and canine careers ranging from circus performer to assisting the handicapped."
        },
        {
            type: "Icelandic Sheepdog Dog",
            image_url: "http://d11kavc4axrfgm.cloudfront.net/pet_care/wp-content/uploads/2016/08/18000948/icelandic-sheepdog.jpg",
            Dog_breed_group : "Herding Dogs",
            Height : "6 inches tall at the shoulder",
            Weight : "20 to 30 pounds",
            lifespan : "14 to 15 years",
            description: "Thought to be companions to the ancient Vikings, the Icelandic Sheepdog dog breed was used to protect flocks, especially lambs, from birds of prey. They still retain the habit of watching the sky and barking at birds — as well as everything else they see or hear."
        },
        {
            type: "Japanese Chin Dog",
            image_url: "https://s-media-cache-ak0.pinimg.com/originals/66/68/93/66689395002d93df92277531e0220c9e.jpg",
            Dog_breed_group : "companion Dogs",
            Height : "8 inches to 11 inches tall at the shoulder",
            Weight : "4 to 9 pounds",
            lifespan : "10 to 14 years",
            description: "The Japanese Chin dog breed hails from Asia, where he has been prized as a companion for more than a thousand years. He was a popular member of Chinese and Japanese imperial courts, and it was in Japan that his distinctive look was developed. This breed is elegant and dainty, mild-mannered and playful."
        },
        {
            type: "Komondor Dog",
            image_url: "http://www.petsworld.in/blog/wp-content/uploads/2014/11/Komondor-Dog.jpg",
            Dog_breed_group : "Working Dogs",
            Height : "3 inches tall at the shoulder",
            Weight : "80 to 100 pounds",
            lifespan : "10 to 12 years",
            description: "His appearance might make you think he was developed to mop floors, but the Komondor has a long and noble heritage as a flock-guarding dog breed in his native Hungary. He still retains a strong protective instinct and will defend his family and property with his life."
        },
        {
            type: "Lancashire Heeler Dog",
            image_url: "http://cdn2-www.dogtime.com/assets/uploads/gallery/lancashire-heeler-dog-breed-pictures/side-3_680-453.jpg",
            Dog_breed_group : "Herding Dogs",
            Height : "10 inches to 1 foot tall at the shoulder",
            Weight : "13 to 15 pounds",
            lifespan : "9 to 14 years",
            description: "The Lancashire Heeler was once used to drive livestock to market and hunt rats and rabbits at home, but is now a popular companion dog breed in his native Britain. He resembles his Corgi cousins, and can be intelligent, mischievous, or stubborn."
        },
        {
            type: "Maltese Dog",
            image_url: "http://cdn3-www.dogtime.com/assets/uploads/2011/01/file_23114_maltese.jpg",
            Dog_breed_group : "companion Dogs",
            Height : "8 inches to 10 inches tall at the shoulder",
            Weight : "upto 8 pounds",
            lifespan : "12 to 15 years",
            description: "A dog breed who’s gentle and fearless, the Maltese greets everyone as a friend. His glamorous white coat gives him a look of haughty nobility, but looks can be deceiving. This is a sprightly, vigorous dog who excels not only as a companion but also as a therapy dog and competitor in such dog sports as agility, obedience, rally, and tracking. But most of all, he loves to be with his people"
        },
        {
            type: "Norwich Terrier Dog",
            image_url: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2Fb0%2Fd0f060a7e411e0a0d50050568d634f%2Ffile%2FNorwich-Terrier-4-645mk062711.jpg",
            Dog_breed_group : "Terrier Dogs",
            Height : "upto 10 inches tall at the shoulder",
            Weight : "upto 12 pounds",
            lifespan : "10 to 14 years",
            description: "The Norwich Terrier originated as a ratter on farms but moved up in the world to bolt foxes from their dens during hunts. Today he’s an amusing companion who serves double duty by keeping your home and yard free of rats and other vermin"
        },
        {
            type: "Old English Sheepdog Dog",
            image_url: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2Fbc%2F8bcb00a38911e087a80050568d634f%2Ffile%2Fold-english-sheepdog-2-645mk062411.jpg",
            Dog_breed_group : "Herding Dogs",
            Height : "9 inches tall at the shoulder",
            Weight : "upto 13 pounds",
            lifespan : "10 to 12 years",
            description: "The Old English Sheepdog is a large, athletic dog breed with an unmistakable shaggy coat. The Old English Sheepdog was historically a drover, helping farmers drive cattle and sheep to the market. Today, the good-natured Old English Sheepdog enjoys the comfort of home life and still competes in conformation, obedience, agility, and herding trials. He’s an adaptable, intelligent dog with an easygoing disposition."
        },
        {
            type: "Poodle Dog",
            image_url: "http://cdn3-www.dogtime.com/assets/uploads/2011/01/file_23200_poodle.jpg",
            Dog_breed_group : "companion Dogs",
            Height : "10 inches tall at the shoulder",
            Weight : "45 to 75 pounds",
            lifespan : "12 to 15 years",
            description: "Elegant. Proud. Clever. Poodles are impressive dogs, as the many best-in-show winners from this dog breed can attest. Behind the blue ribbons, impressive hairdos, and regal attitude, you’ll find an affectionate family dog with an ancient history and many talents."
        },
        {
            type: "Rhodesian Ridgeback Dog",
            image_url: "http://www.yourpurebredpuppy.com/dogbreeds/photos-RS/rhodesianridgebacksf1.jpg",
            Dog_breed_group : "Hound Dogs",
            Height : "3 inches tall at the shoulder",
            Weight : "70 to 85 pounds",
            lifespan : "10 to 12 years",
            description: "This handsome dog breed was created in Africa to be a versatile hunter and home guardian. He’s smart but sometimes stubborn, with a moderate energy level and an easy-care coat. These days, he’s less likely to hunt lions and more likely to hunt a soft spot on the sofa after going jogging with you."
        },
        {
            type: "Skye Terrier Dog",
            image_url: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F36%2F7c2d20a80711e0a0d50050568d634f%2Ffile%2FSkye-Terrier-1-645mk062811.jpg",
            Dog_breed_group : "Terrier Dogs",
            Height : "9 inches to 10 inches tall at the shoulder",
            Weight : "25 to 40 pounds",
            lifespan : "12 to 14 years",
            description: "The Skye Terrier is a medium-size dog breed who was developed on the Isle of Skye in Scotland. They were originally developed to hunt and kill badger, otter and fox, but these days they’re appreciated as a versatile companion breed."
        },
        {
            type: "Tibetan Mastiff Dog",
            image_url: "https://i.ytimg.com/vi/CtlxfR1B4qs/maxresdefault.jpg",
            Dog_breed_group : "Working Dogs",
            Height : "2 inches tall at the shoulder",
            Weight : "75 to 160 pounds",
            lifespan : "10 to 14 years",
            description: "This still primitive dog breed was developed centuries ago in Tibet. Originally used as guard dogs for livestock and property, Tibetan Mastiffs can still be found performing that role, but they also enjoy life as a family companion and show dog."
        },
        {
            type: "Vizsla Dog",
            image_url: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F19%2F951e90a80911e0a0d50050568d634f%2Ffile%2FVizsla-4-645mk062911.jpg",
            Dog_breed_group : "Sporting Dogs",
            Height : "9 inches to 2 feet tall at the shoulder",
            Weight : "45 to 65 pounds",
            lifespan : "10 to 14 years",
            description: "Created in Hungary to work as a pointer and retriever, the Vizsla dog breed has an aristocratic bearing. All he really wants, though, is to be loved. He’s a super companion for an active family who can provide him with the exercise and attention he craves."
        },
        {
            type: "Welsh Springer Spaniel Dog",
            image_url: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F4e%2F700400a80d11e0a0d50050568d634f%2Ffile%2FWelsh-Springer-Spaniel-4-645mk062911.jpg",
            Dog_breed_group : "Sporting Dogs",
            Height : "7 inches tall at the shoulder",
            Weight : "35 to 55 pounds",
            lifespan : "10 to 15 years",
            description: "The Welsh Springer Spaniel dog breed was developed as a gundog to flush, or spring, game in the field. A faithful companion, he’s a favorite of discriminating hunters and families. Give him the exercise and training he needs, and he’ll be your best friend."
        },
        {
            type: "Xoloitzcuintli Dog",
            image_url: "http://www.yourpurebredpuppy.com/dogbreeds/photos-TZ/xoloitzcuintlef2.jpg",
            Dog_breed_group : "Companion Dogs",
            Height : "11 inches tall at the shoulder",
            Weight : "10 to 50 pounds",
            lifespan : "14 to 20 years",
            description: "The Xoloitzcuintli dog breed, sometimes called the Mexican Hairless, may well have descended from the first dogs to set paw on the North American continent. In their native Mexico and Central America, they were popular “doctors,” the heat given off by their body being comforting to people with arthritis and other ailments; people still like to cuddle with them today."
        },
        {
            type: "Yorkipoo Dog",
            image_url: "http://www.warrenphotographic.co.uk/photography/bigs/42189-Yorkipoo-dog-running-white-background.jpg",
            Dog_breed_group : "Hybrid Dogs",
            Height : "3 inches tall at the shoulder",
            Weight : "3 to 14 pounds",
            lifespan : "10 to 15 years",
            description: "A fun-loving “designer dog” — and therefore a mixed dog breed — a Yorkipoo is a cross between the Yorkshire Terrier and a Toy or Miniature Poodle. Intelligent, affectionate, and gentle, he makes a delightful companion and is perfectly suited to apartment life, especially if you don’t mind the barking. He has plenty of energy to be burned off and he loves to play when he’s not parked on your lap watching the world go by. His ability to run fast and jump high can be surprising to those who aren’t expecting a canine Superman in miniature."
        }
    ];

})();