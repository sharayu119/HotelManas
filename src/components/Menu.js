import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  padding: clamp(60px, 10vw, 100px) clamp(15px, 3vw, 20px) clamp(30px, 5vw, 50px);
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 80px 15px 30px;
  }
`;

const TitleH2 = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #666;
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const MenuWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const MenuTitle = styled.h1`
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
  font-size: clamp(2rem, 5vw, 3rem);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const MenuSection = styled.div`
  margin-bottom: clamp(2rem, 5vw, 3rem);

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #1a1a1a;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  
  &::after {
    content: '';
    display: block;
    width: clamp(40px, 8vw, 60px);
    height: 3px;
    background-color: #ffd700;
    margin: clamp(8px, 2vw, 15px) auto 0;

    @media (max-width: 768px) {
      width: 50px;
      margin: 10px auto 0;
    }
  }
`;

const DishGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  padding: 0 clamp(0.5rem, 2vw, 1rem);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 0;
  }
`;

const DishCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform-origin: center;
  will-change: transform;

  @media (max-width: 768px) {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-2px) scale(1.01);
  }
`;

const DishImage = styled.div`
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1));
    z-index: 1;
  }

  ${DishCard}:hover & {
    transform: scale(1.05);
  }

  &.loading {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 0.8; }
    100% { opacity: 0.6; }
  }
`;

const DishInfo = styled.div`
  padding: clamp(1rem, 2vw, 1.5rem);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const DishName = styled.h3`
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const DishDescription = styled.p`
  color: #666;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
`;

const DishPrice = styled.span`
  color: #ffd700;
  font-weight: bold;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  display: inline-block;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Menu = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const menuItems = {
    vegStarters: [
      {
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese cubes grilled to perfection with Indian spices',
        price: '₹250',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJ40xz8gBs8cn_kob12fagYxODNO5JTF_AA&s',
        isVeg: true
      },
      {
        name: 'Veg Spring Rolls',
        description: 'Crispy rolls filled with mixed vegetables and Asian spices',
        price: '₹180',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWHwYgrOG1g6TDcxL7dqbymshUOEI5V-xuA&s',
        isVeg: true
      },
      {
        name: 'Masala Papad',
        description: 'Crispy lentil wafers topped with spiced onions and tomatoes',
        price: '₹80',
        image: 'https://www.indore.online/cdn/shop/articles/Masala_Papad_735x.jpg?v=1674819304',
        isVeg: true
      },
      {
        name: 'Hara Bhara Kebab',
        description: 'Green vegetable patties made with spinach and green peas',
        price: '₹220',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHVo86pfZ98tQRR2cbDfCCeLFlDjecnw5Qg&s',
        isVeg: true
      },
      {
        name: 'Manchurian',
        description: 'Crispy fried vegetables in a spicy sauce',
        price: '₹200',
        image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg',
        isVeg: true
      },
      {
        name: 'Aloo Tikki',
        description: 'Crispy potato patties made with potatoes and spices',
        price: '₹150',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jMNIphcLzkGiYCchSgSyiayBL-hGW-Y9HA&s',
        isVeg: true
      }
    ],
    nonVegStarters: [
      {
        name: 'Chicken Tikka',
        description: 'Tender chicken pieces marinated in spices and grilled',
        price: '₹280',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Chicken-Tikka-99647a6.jpg?quality=90&resize=556,505',
        isVeg: false
      },
      {
        name: 'Fish Tikka',
        description: 'Fresh fish marinated in spices and grilled to perfection',
        price: '₹320',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-716YYVz7e2Bvgf8LwdihesIgbJ5YwKD2Q&s',
        isVeg: false
      },
      {
        name: 'Chicken Wings',
        description: 'Crispy fried chicken wings with special sauce',
        price: '₹300',
        image: 'https://bakerbynature.com/wp-content/uploads/2015/02/Sweet-and-Spicy-Sriracha-Chicken-Wings-0-6.jpg',
        isVeg: false
      }
    ],
    vegMainCourse: [
      {
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in creamy tomato gravy',
        price: '₹280',
        image: 'https://vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg',
        isVeg: true
      },
      {
        name: 'Dal Makhani',
        description: 'Black lentils slow-cooked with cream and butter',
        price: '₹250',
        image: 'https://www.greedygourmet.com/wp-content/uploads/2013/02/dal-makhani-feature-225x225.jpg',
        isVeg: true
      },
      {
        name: 'Kaju Masala',
        description: 'Kaju masala is a popular dish in Indian cuisine, made with cashews, onions, tomatoes, and spices',
        price: '₹280',
        image: 'https://sagarkitchen.com/wp-content/uploads/2024/01/kaju-masala-recipe-cashew-masala-kaju-kari-kaju-curry-cashew-nut-curry-sri-lanka-sagar-kitchen-.webp',
        isVeg: true
      }, 
      {
        name: 'Paneer Angara',
        description: 'Paneer angara is a popular dish in Indian cuisine, made with paneer, onions, tomatoes, and spices',
        price: '₹280',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAjTg5mbppm4qpc8Hy8P-MWD0iZj5P7S-PA&s',
        isVeg: true
      },
      {
        name: 'Malai Kofta',
        description: 'Vegetable dumplings in rich creamy gravy',
        price: '₹260',
        image: 'https://media.istockphoto.com/id/1219174110/photo/malai-kofta-curry-in-black-bowl-at-dark-slate-background-malai-kofta-is-indian-cuisine-dish.jpg?s=612x612&w=0&k=20&c=YBusjVmB35Q0AAFuMs48KRLNgnDQuL1dONJ0EBYwS9M=',
        isVeg: true
      }
    ],
    nonVegMainCourse: [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken pieces in rich tomato and butter gravy',
        price: '₹350',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2jh7DvoLtDyDF6cigDHFrSMs5zMpaXRelA&s',
        isVeg: false
      },
      {
        name: 'Chicken Curry',
        description: 'Chicken cooked in traditional Indian spices',
        price: '₹320',
        image: 'https://www.whiskaffair.com/wp-content/uploads/2020/07/Tomato-Chicken-Curry-2-3.jpg',
        isVeg: false
      },
      {
        name: 'Fish Curry',
        description: 'Fish cooked in spicy coconut gravy',
        price: '₹380',
        image: 'https://www.shutterstock.com/image-photo/fish-curry-flavorful-aromatic-dish-260nw-2581414087.jpg',
        isVeg: false
      },
      {
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice cooked with chicken and aromatic spices',
        price: '₹320',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/040/703/949/small/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg',
        isVeg: false
      }
    ],
    breads: [
      {
        name: 'Tandoori Roti',
        description: 'Whole wheat bread baked in tandoor',
        price: '₹40',
        image: 'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/14423167232KIe8WnTzK_thumb.jpeg',
        isVeg: true
      },
      {
        name: 'Butter Naan',
        description: 'Soft leavened bread brushed with butter',
        price: '₹60',
        image: 'https://orders.popskitchen.in/storage/2024/09/image-69.png',
        isVeg: true
      },
      {
        name: 'Garlic Roti',
        description: 'Whole wheat bread with roasted garlic',
        price: '₹50',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVl8OI02gnRczFXUC47SlXarb6ExkYj1n5w&s',
        isVeg: true
      }
    ],
    rice: [
      {
        name: 'Steamed Rice',
        description: 'Rice is a staple food in Indian cuisine',
        price: '₹100',
        image: 'https://media.soscuisine.com/images/recettes/large/687.jpg'
      },
      {
        name: 'Jeera Rice',
        description: 'Rice is a staple food in Indian cuisine',
        price: '₹120',
        image: 'https://i.pinimg.com/736x/b5/0f/96/b50f966d24989f72a7cf5bd789bb6408.jpg'
      },
      {
        name: 'Masala Rice',
        description: 'Rice is a staple food in Indian cuisine',
        price: '₹150',
        image: 'https://www.sharmispassions.com/wp-content/uploads/2019/04/MasalaRice2.jpg'
      },
      {
        name: 'Fried Rice',
        description: 'Fried rice is a popular dish in Indian cuisine',
        price: '₹170',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJ-4KVdyGWaeCdR6w1vhY653Xyk9g2Y0lQ&s'
      },
      {
        name: 'Veg Biryani',
        description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
        price: '₹280',
        image: 'https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-Featured.jpg',
      }
    ],
    desserts: [
      {
        name: 'Gulab Jamun',
        description: 'Deep-fried milk dumplings soaked in sugar syrup',
        price: '₹120',
        image: 'https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1'
      },
      {
        name: 'Rasmalai',
        description: 'Soft cottage cheese patties in sweetened, cardamom-flavored milk',
        price: '₹150',
        image: 'https://st3.depositphotos.com/5653638/15698/i/450/depositphotos_156987234-stock-photo-save-download-preview-angoori-rasmalai.jpg',
        isVeg: true
      },
      {
        name: 'Ice Cream',
        description: 'Assorted flavors of premium ice cream',
        price: '₹100',
        image: 'https://static.toiimg.com/thumb/msid-112019658,width-1280,height-720,resizemode-4/112019658.jpg',
        isVeg: true
      }
    ]
  };

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      const imagePromises = Object.values(menuItems).flat().map(item => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.image;
          img.onload = () => {
            setLoadedImages(prev => ({
              ...prev,
              [item.image]: true
            }));
            resolve();
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const renderDishCard = (dish) => {
    const isImageLoaded = loadedImages[dish.image];

    return (
      <DishCard key={dish.name}>
        <DishImage
          className={!isImageLoaded ? 'loading' : ''}
          style={{
            backgroundImage: isImageLoaded ? `url(${dish.image})` : 'none'
          }}
          role="img"
          aria-label={`${dish.name} - ${dish.isVeg ? 'Vegetarian' : 'Non-vegetarian'} dish`}
        />
        <DishInfo>
          <DishName>{dish.name}</DishName>
          <DishDescription>{dish.description}</DishDescription>
          <DishPrice>{dish.price}</DishPrice>
        </DishInfo>
      </DishCard>
    );
  };

  return (
    <MenuContainer>
      <MenuWrapper>
        <MenuTitle>Our Culinary Delights</MenuTitle>
        <TitleH2>Explore Our Menu</TitleH2>
        
        <MenuSection>
          <SectionTitle>Vegetarian Starters</SectionTitle>
          <DishGrid>
            {menuItems.vegStarters.map(renderDishCard)}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Non-Vegetarian Starters</SectionTitle>
          <DishGrid>
            {menuItems.nonVegStarters.map(renderDishCard)}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Vegetarian Main Course</SectionTitle>
          <DishGrid>
            {menuItems.vegMainCourse.map(renderDishCard)}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Non-Vegetarian Main Course</SectionTitle>
          <DishGrid>
            {menuItems.nonVegMainCourse.map(renderDishCard)}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Breads</SectionTitle>
          <DishGrid>
            {menuItems.breads.map(renderDishCard)}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Rice</SectionTitle>
          <DishGrid>
            {menuItems.rice.map(renderDishCard)}
          </DishGrid>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Desserts</SectionTitle>
          <DishGrid>
            {menuItems.desserts.map(renderDishCard)}
          </DishGrid>
        </MenuSection>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu; 