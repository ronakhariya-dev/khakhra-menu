export type SpiceLevel = 'mild' | 'medium' | 'hot' | 'none'
export type Category = 'classic' | 'spicy' | 'tangy' | 'herby'

export interface MenuItem {
  id: string
  name: string
  nameGuj?: string
  tagline: string
  ingredients: string[]
  base: string
  spiceLevel: SpiceLevel
  category: Category
  isNew?: boolean
  isBestseller?: boolean
  color: string
  accentColor: string
  emoji: string
  description: string
  weight?: string
}

export const menuItems: MenuItem[] = [
  {
    id: 'jeera',
    name: 'Jeera Khakhra',
    nameGuj: 'જીરા ખાખરા',
    tagline: 'The timeless classic',
    description: 'Our most beloved variety — crispy whole wheat rounds gently roasted with hand-picked cumin seeds. Light, aromatic, and endlessly snackable.',
    ingredients: ['Whole Wheat', 'Roasted Jeera', 'Mild Spices', 'Edible Oil', 'Salt'],
    base: 'Whole Wheat',
    spiceLevel: 'mild',
    category: 'classic',
    isBestseller: true,
    color: '#FDF0E0',
    accentColor: '#D4870A',
    emoji: '🌾',
    weight: '200g',
  },
  {
    id: 'masala',
    name: 'Masala Khakhra',
    nameGuj: 'મસાલા ખાખરા',
    tagline: 'Bold & tangy signature',
    description: 'A burst of tangy masala in every bite. Our signature spice blend has been perfected over generations — deeply flavourful without the heat.',
    ingredients: ['Whole Wheat', 'Tangy Masala', 'Signature Spices', 'Chickpea Flour', 'Edible Oil'],
    base: 'Whole Wheat',
    spiceLevel: 'medium',
    category: 'tangy',
    isBestseller: true,
    color: '#FDE8D8',
    accentColor: '#C0521A',
    emoji: '🌶️',
    weight: '200g',
  },
  {
    id: 'periperi',
    name: 'Peri Peri Khakhra',
    nameGuj: 'પેરી પેરી ખાખરા',
    tagline: 'Fire meets crunch',
    description: 'Traditional khakhra gets a bold modern twist. Fiery peri peri spice meets the wholesome crunch of whole wheat — a favourite with the younger crowd.',
    ingredients: ['Whole Wheat', 'Peri Peri Blend', 'Red Chilli', 'Herbs', 'Garlic', 'Edible Oil'],
    base: 'Whole Wheat',
    spiceLevel: 'hot',
    category: 'spicy',
    isNew: true,
    color: '#FCE0DB',
    accentColor: '#B52A1A',
    emoji: '🔥',
    weight: '200g',
  },
  {
    id: 'pavbhaji',
    name: 'Pav Bhaji Khakhra',
    nameGuj: 'પાવ ભાજી ખાખરા',
    tagline: 'Street food in a crunch',
    description: 'All the nostalgia of Mumbai street food in a crispy khakhra. Rich pav bhaji masala and aromatic spices make this one irresistibly familiar.',
    ingredients: ['Whole Wheat', 'Pav Bhaji Masala', 'Aromatic Spices', 'Tomato Powder', 'Butter Flavour'],
    base: 'Whole Wheat',
    spiceLevel: 'medium',
    category: 'tangy',
    color: '#FDEBD0',
    accentColor: '#A04A0A',
    emoji: '🧈',
    weight: '200g',
  },
  {
    id: 'panipuri',
    name: 'Pani Puri Khakhra',
    nameGuj: 'પાની પુરી ખાખરા',
    tagline: 'Tangy, minty & addictive',
    description: 'The beloved flavour of pani puri — cooling mint, sharp tamarind, zingy spices — all packed into a wholesome khakhra. One bite and you\'re hooked.',
    ingredients: ['Whole Wheat', 'Mint Powder', 'Tangy Pani Puri Masala', 'Amchur', 'Black Salt', 'Jeera'],
    base: 'Whole Wheat',
    spiceLevel: 'medium',
    category: 'tangy',
    color: '#E8F5E9',
    accentColor: '#2E7D4F',
    emoji: '🌿',
    weight: '200g',
  },
  {
    id: 'ajwain',
    name: 'Ajwain Khakhra',
    nameGuj: 'અજવાઈન ખાખરા',
    tagline: 'Traditional & digestive',
    description: 'Made with carom seeds — a staple in every Gujarati household. Aromatic ajwain not only tastes incredible but aids digestion too. Pure and traditional.',
    ingredients: ['Whole Wheat', 'Ajwain (Carom Seeds)', 'Traditional Spices', 'Edible Oil', 'Salt'],
    base: 'Whole Wheat',
    spiceLevel: 'mild',
    category: 'classic',
    color: '#FFF3CD',
    accentColor: '#8B6914',
    emoji: '🌼',
    weight: '200g',
  },
  {
    id: 'methi',
    name: 'Methi Khakhra',
    nameGuj: 'મેથી ખાખરા',
    tagline: 'Bitter-sweet heritage',
    description: 'Fenugreek leaves bring a distinctive, authentic flavour that\'s been loved across Gujarat for generations. Wholesome, nutritious, and deeply satisfying.',
    ingredients: ['Whole Wheat', 'Dried Methi (Fenugreek)', 'Authentic Spices', 'Edible Oil', 'Salt'],
    base: 'Whole Wheat',
    spiceLevel: 'mild',
    category: 'herby',
    color: '#E8F5E9',
    accentColor: '#1B5E3B',
    emoji: '🌱',
    weight: '200g',
  },
]

export const categories = [
  { id: 'all', label: 'All Items', emoji: '✦' },
  { id: 'classic', label: 'Classic', emoji: '🌾' },
  { id: 'tangy', label: 'Tangy', emoji: '🍋' },
  { id: 'spicy', label: 'Spicy', emoji: '🌶️' },
  { id: 'herby', label: 'Herby', emoji: '🌿' },
]

export const spiceConfig = {
  none:   { label: 'Plain',  dots: 0, color: '#999' },
  mild:   { label: 'Mild',   dots: 1, color: '#4A7C59' },
  medium: { label: 'Medium', dots: 2, color: '#D4870A' },
  hot:    { label: 'Hot',    dots: 3, color: '#C0392B' },
}
