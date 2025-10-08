
import type { Product } from './types';
import placeholderData from './placeholder-images.json';

const { placeholderImages } = placeholderData;

const getImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return {
    url: image?.imageUrl || 'https://picsum.photos/seed/placeholder/600/400',
    hint: image?.imageHint || 'tech product',
  };
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro X',
    description: 'The ultimate professional laptop with unparalleled performance and a stunning display.',
    price: 124499.17,
    imageUrl: getImage('laptop-pro-1').url,
    imageHint: getImage('laptop-pro-1').hint,
    category: 'Laptops',
    brand: 'TechCorp',
    specifications: { 'CPU': 'M3 Pro', 'RAM': '16GB', 'Storage': '512GB SSD' }
  },
  {
    id: '2',
    name: 'Smartphone X1',
    description: 'A flagship smartphone with a pro-grade camera system and all-day battery life.',
    price: 82999.17,
    imageUrl: getImage('smartphone-x-1').url,
    imageHint: getImage('smartphone-x-1').hint,
    category: 'Smartphones',
    brand: 'Connecta',
    specifications: { 'Screen': '6.7" OLED', 'Camera': '48MP', 'Storage': '256GB' }
  },
  {
    id: '3',
    name: 'Sky-High 4K Drone',
    description: 'Capture breathtaking aerial footage with this easy-to-fly 4K drone.',
    price: 66317.00,
    imageUrl: getImage('drone-4k-1').url,
    imageHint: getImage('drone-4k-1').hint,
    category: 'Drones',
    brand: 'AeroFly',
    specifications: { 'Resolution': '4K HDR', 'Flight Time': '30 mins', 'Range': '5km' }
  },
  {
    id: '4',
    name: 'AcousticBliss Headphones',
    description: 'Immerse yourself in sound with these industry-leading noise-cancelling headphones.',
    price: 29008.50,
    imageUrl: getImage('headphones-noise-1').url,
    imageHint: getImage('headphones-noise-1').hint,
    category: 'Headphones',
    brand: 'AudioPhonic',
    specifications: { 'Type': 'Over-ear', 'Noise Cancellation': 'Active', 'Battery': '30 hours' }
  },
  {
    id: '5',
    name: 'FitTrack Smartwatch',
    description: 'Your perfect fitness companion, tracking all your health metrics in style.',
    price: 20749.17,
    imageUrl: getImage('smartwatch-fit-1').url,
    imageHint: getImage('smartwatch-fit-1').hint,
    category: 'Accessories',
    brand: 'HealthGear',
    specifications: { 'Display': 'AMOLED', 'Sensors': 'HR, SpO2, GPS', 'Water Resistance': '50m' }
  },
  {
    id: '6',
    name: 'ProShot Mirrorless Camera',
    description: 'Unleash your creativity with this versatile and powerful mirrorless camera.',
    price: 165917.00,
    imageUrl: getImage('camera-mirrorless-1').url,
    imageHint: getImage('camera-mirrorless-1').hint,
    category: 'Cameras',
    brand: 'PhotoMage',
    specifications: { 'Sensor': 'Full-Frame', 'Megapixels': '24.2MP', 'Video': '4K 60fps' }
  },
  {
    id: '7',
    name: 'ImmersiView VR Headset',
    description: 'Step into new worlds with a high-resolution, comfortable VR experience.',
    price: 41417.00,
    imageUrl: getImage('vr-headset-1').url,
    imageHint: getImage('vr-headset-1').hint,
    category: 'Gaming',
    brand: 'Virtualis',
    specifications: { 'Resolution': '4K per eye', 'Field of View': '110°', 'Refresh Rate': '120Hz' }
  },
  {
    id: '8',
    name: 'Odyssey Gaming Console',
    description: 'Next-generation gaming with lightning-fast load times and stunning graphics.',
    price: 41499.17,
    imageUrl: getImage('gaming-console-1').url,
    imageHint: getImage('gaming-console-1').hint,
    category: 'Gaming',
    brand: 'GameSphere',
    specifications: { 'Storage': '1TB NVMe SSD', 'Resolution': 'Up to 8K', 'CPU': 'Custom 8-core' }
  },
  {
    id: '9',
    name: 'CinemaBeam Home Projector',
    description: 'Bring the cinema home with this bright, 1080p smart projector.',
    price: 53950.00,
    imageUrl: getImage('projector-home-1').url,
    imageHint: getImage('projector-home-1').hint,
    category: 'Accessories',
    brand: 'ViewSonic',
    specifications: { 'Resolution': '1080p Full HD', 'Brightness': '3500 Lumens', 'Type': 'DLP' }
  },
  {
    id: '10',
    name: 'NetMaster Wi-Fi 6 Router',
    description: 'Blanket your home in fast, reliable Wi-Fi for all your devices.',
    price: 16599.17,
    imageUrl: getImage('router-wifi6-1').url,
    imageHint: getImage('router-wifi6-1').hint,
    category: 'Accessories',
    brand: 'Linksys',
    specifications: { 'Standard': 'Wi-Fi 6 (802.11ax)', 'Speed': 'AX6000', 'Bands': 'Dual-Band' }
  },
  {
    id: '11',
    name: 'Click-Clack Mechanical Keyboard',
    description: 'A tactile and responsive mechanical keyboard for typing and gaming enthusiasts.',
    price: 10707.00,
    imageUrl: getImage('mechanical-keyboard-1').url,
    imageHint: getImage('mechanical-keyboard-1').hint,
    category: 'Accessories',
    brand: 'Keychron',
    specifications: { 'Switches': 'Brown Tactile', 'Backlight': 'RGB', 'Layout': 'Tenkeyless' }
  },
  {
    id: '12',
    name: 'Giga-Core Graphics Card',
    description: 'Experience ultra-high frame rates with this top-of-the-line graphics card.',
    price: 99517.00,
    imageUrl: getImage('graphics-card-1').url,
    imageHint: getImage('graphics-card-1').hint,
    category: 'Components',
    brand: 'NVIDIA',
    specifications: { 'Model': 'RTX 5080', 'VRAM': '16GB GDDR7', 'Cores': '10240' }
  },
  {
    id: '13',
    name: 'Velocity NVMe SSD 2TB',
    description: 'Drastically reduce load times with this blazing-fast 2TB NVMe SSD.',
    price: 14939.17,
    imageUrl: getImage('ssd-nvme-1').url,
    imageHint: getImage('ssd-nvme-1').hint,
    category: 'Components',
    brand: 'Samsung',
    specifications: { 'Capacity': '2TB', 'Read Speed': '7000 MB/s', 'Interface': 'PCIe 4.0' }
  },
  {
    id: '14',
    name: 'AquaBeat Portable Speaker',
    description: 'Take your music anywhere with this rugged, waterproof Bluetooth speaker.',
    price: 8299.17,
    imageUrl: getImage('portable-speaker-1').url,
    imageHint: getImage('portable-speaker-1').hint,
    category: 'Headphones',
    brand: 'JBL',
    specifications: { 'Waterproof': 'IP67', 'Battery': '12 hours', 'Connectivity': 'Bluetooth 5.1' }
  },
  {
    id: '15',
    name: 'Literati E-Reader',
    description: 'Carry your entire library in one lightweight device with a paper-like display.',
    price: 11619.17,
    imageUrl: getImage('e-reader-1').url,
    imageHint: getImage('e-reader-1').hint,
    category: 'Accessories',
    brand: 'Kindle',
    specifications: { 'Screen': '6.8" E-ink', 'Storage': '16GB', 'Backlight': 'Warm light' }
  },
  {
    id: '16',
    name: 'CreatorBot 3D Printer',
    description: 'Bring your digital designs to life with this user-friendly 3D printer.',
    price: 33117.00,
    imageUrl: getImage('3d-printer-1').url,
    imageHint: getImage('3d-printer-1').hint,
    category: 'Components',
    brand: 'Creality',
    specifications: { 'Build Volume': '220x220x250mm', 'Technology': 'FDM', 'Filament': '1.75mm PLA/ABS' }
  },
  {
    id: '17',
    name: 'StreamCam HD Webcam',
    description: 'Look your best on video calls and streams with a crystal-clear 1080p webcam.',
    price: 13279.17,
    imageUrl: getImage('webcam-hd-1').url,
    imageHint: getImage('webcam-hd-1').hint,
    category: 'Cameras',
    brand: 'Logitech',
    specifications: { 'Resolution': '1080p 60fps', 'Focus': 'Autofocus', 'Field of View': '78°' }
  },
  {
    id: '18',
    name: 'ConnectAll Docking Station',
    description: 'Turn your laptop into a full desktop setup with a single USB-C cable.',
    price: 20667.00,
    imageUrl: getImage('docking-station-1').url,
    imageHint: getImage('docking-station-1').hint,
    category: 'Accessories',
    brand: 'CalDigit',
    specifications: { 'Ports': '10', 'Video Output': 'Dual 4K', 'Power Delivery': '96W' }
  },
  {
    id: '19',
    name: 'EnduraCharge Power Bank',
    description: 'A massive 20,000mAh power bank to keep all your devices charged for days.',
    price: 4979.17,
    imageUrl: getImage('power-bank-1').url,
    imageHint: getImage('power-bank-1').hint,
    category: 'Accessories',
    brand: 'Anker',
    specifications: { 'Capacity': '20,000mAh', 'Output': '45W USB-C PD', 'Ports': '3' }
  },
  {
    id: '20',
    name: 'VisionMax Ultrawide Monitor',
    description: 'Immerse yourself in work and play with this stunning 34-inch ultrawide QHD monitor.',
    price: 74699.17,
    imageUrl: getImage('monitor-ultrawide-1').url,
    imageHint: getImage('monitor-ultrawide-1').hint,
    category: 'Components',
    brand: 'Dell',
    specifications: { 'Size': '34-inch', 'Resolution': '3440x1440', 'Panel': 'IPS', 'Refresh Rate': '120Hz' }
  },
  {
    id: '21',
    name: 'PrecisionPro Mouse',
    description: 'A high-precision gaming mouse with customizable RGB lighting and programmable buttons.',
    price: 4983.50,
    imageUrl: getImage('gaming-mouse-1').url,
    imageHint: getImage('gaming-mouse-1').hint,
    category: 'Accessories',
    brand: 'Razer',
    specifications: { 'DPI': '20,000', 'Buttons': '8', 'Connectivity': 'Wired' }
  },
  {
    id: '22',
    name: 'CrystalView 4K Monitor',
    description: 'A 27-inch 4K monitor with HDR support, offering stunning clarity and vibrant colors.',
    price: 37349.17,
    imageUrl: getImage('4k-monitor-1').url,
    imageHint: getImage('4k-monitor-1').hint,
    category: 'Components',
    brand: 'LG',
    specifications: { 'Size': '27-inch', 'Resolution': '3840x2160', 'Panel': 'IPS' }
  },
  {
    id: '23',
    name: 'AirBuds Freedom',
    description: 'True wireless earbuds with active noise cancellation and a compact charging case.',
    price: 14939.17,
    imageUrl: getImage('wireless-earbuds-1').url,
    imageHint: getImage('wireless-earbuds-1').hint,
    category: 'Headphones',
    brand: 'AudioPhonic',
    specifications: { 'Battery': '24 hours total', 'Noise Cancellation': 'Active', 'Water Resistance': 'IPX4' }
  },
  {
    id: '24',
    name: 'DataSafe 4TB HDD',
    description: 'A reliable 4TB external hard drive for backing up your important files.',
    price: 9129.17,
    imageUrl: getImage('external-hdd-1').url,
    imageHint: getImage('external-hdd-1').hint,
    category: 'Components',
    brand: 'Seagate',
    specifications: { 'Capacity': '4TB', 'Interface': 'USB 3.0', 'Type': 'HDD' }
  },
  {
    id: '25',
    name: 'EchoSphere Smart Speaker',
    description: 'A voice-controlled smart speaker that fills the room with 360-degree audio.',
    price: 8299.17,
    imageUrl: getImage('smart-speaker-1').url,
    imageHint: getImage('smart-speaker-1').hint,
    category: 'Accessories',
    brand: 'Connecta',
    specifications: { 'Assistant': 'Voice-activated', 'Connectivity': 'Wi-Fi, Bluetooth', 'Sound': '360-degree' }
  },
  {
    id: '26',
    name: 'XtremeCam Action Camera',
    description: 'A rugged and waterproof action camera that records in stunning 5K resolution.',
    price: 33199.17,
    imageUrl: getImage('action-camera-1').url,
    imageHint: getImage('action-camera-1').hint,
    category: 'Cameras',
    brand: 'GoPro',
    specifications: { 'Resolution': '5K', 'Waterproof': '10m', 'Stabilization': 'HyperSmooth 5.0' }
  },
  {
    id: '27',
    name: 'Tabula Pro 11-inch',
    description: 'A powerful and versatile tablet that is perfect for work, creativity, and entertainment.',
    price: 66317.00,
    imageUrl: getImage('tablet-pro-1').url,
    imageHint: getImage('tablet-computer-1').hint,
    category: 'Tablets',
    brand: 'TechCorp',
    specifications: { 'Screen': '11-inch Liquid Retina', 'Chip': 'M2', 'Storage': '256GB' }
  },
  {
    id: '28',
    name: 'Immerse-R32 Curved Monitor',
    description: 'A 32-inch curved gaming monitor with a 165Hz refresh rate for smooth gameplay.',
    price: 41499.17,
    imageUrl: getImage('curved-monitor-1').url,
    imageHint: getImage('curved-monitor-1').hint,
    category: 'Components',
    brand: 'AOC',
    specifications: { 'Size': '32-inch', 'Curve': '1500R', 'Refresh Rate': '165Hz' }
  },
  {
    id: '29',
    name: 'StreamStick 4K Max',
    description: 'Upgrade any TV to a smart TV with this powerful 4K streaming stick.',
    price: 5399.17,
    imageUrl: getImage('streaming-stick-1').url,
    imageHint: getImage('streaming-stick-1').hint,
    category: 'Accessories',
    brand: 'Amazon',
    specifications: { 'Resolution': '4K HDR', 'Wi-Fi': 'Wi-Fi 6', 'Remote': 'Voice Remote' }
  },
  {
    id: '30',
    name: 'AtmosBar 5.1.2',
    description: 'A premium soundbar system with Dolby Atmos for an immersive home theater experience.',
    price: 49833.50,
    imageUrl: getImage('soundbar-1').url,
    imageHint: getImage('soundbar-1').hint,
    category: 'Accessories',
    brand: 'Sony',
    specifications: { 'Channels': '5.1.2', 'Sound': 'Dolby Atmos', 'Connectivity': 'HDMI eARC, Bluetooth' }
  },
  {
    id: '31',
    name: 'PowerHub Charging Station',
    description: 'A sleek charging station that can power up to 5 devices simultaneously.',
    price: 4149.17,
    imageUrl: getImage('charging-station-1').url,
    imageHint: getImage('charging-station-1').hint,
    category: 'Accessories',
    brand: 'Anker',
    specifications: { 'Ports': '5 (3 USB-A, 2 USB-C)', 'Total Output': '100W', 'Technology': 'GaN' }
  },
  {
    id: '32',
    name: 'ScanFast Document Scanner',
    description: 'A high-speed, duplex document scanner to digitize your paperwork effortlessly.',
    price: 24900.00,
    imageUrl: getImage('document-scanner-1').url,
    imageHint: getImage('document-scanner-1').hint,
    category: 'Accessories',
    brand: 'Fujitsu',
    specifications: { 'Speed': '40 ppm', 'Feeder': '50-sheet ADF', 'Duplex': 'Yes' }
  },
  {
    id: '33',
    name: 'AuraHome Mesh WiFi',
    description: 'A 3-pack mesh Wi-Fi system that eliminates dead zones and provides seamless coverage.',
    price: 24899.17,
    imageUrl: getImage('mesh-wifi-1').url,
    imageHint: getImage('mesh-wifi-1').hint,
    category: 'Accessories',
    brand: 'TP-Link',
    specifications: { 'Coverage': 'Up to 5,500 sq ft', 'Standard': 'Wi-Fi 6', 'Units': '3-pack' }
  },
  {
    id: '34',
    name: 'Trekker 1TB Portable SSD',
    description: 'A rugged and ultra-portable 1TB SSD with high-speed data transfer.',
    price: 12449.17,
    imageUrl: getImage('portable-ssd-1').url,
    imageHint: getImage('portable-ssd-1').hint,
    category: 'Components',
    brand: 'SanDisk',
    specifications: { 'Capacity': '1TB', 'Speed': 'Up to 1050MB/s', 'Durability': 'IP55 Water & Dust Resistant' }
  },
  {
    id: '35',
    name: 'CanvasPro Drawing Tablet',
    description: 'A large drawing tablet with a battery-free stylus, perfect for digital artists.',
    price: 33117.00,
    imageUrl: getImage('drawing-tablet-1').url,
    imageHint: getImage('drawing-tablet-1').hint,
    category: 'Accessories',
    brand: 'Wacom',
    specifications: { 'Active Area': '10.4 x 5.8 in', 'Pressure Levels': '8192', 'Stylus': 'Battery-free' }
  },
  {
    id: '36',
    name: 'HomeCloud NAS Enclosure',
    description: 'A 2-bay Network Attached Storage enclosure to create your personal cloud.',
    price: 29000.00,
    imageUrl: getImage('nas-enclosure-1').url,
    imageHint: getImage('nas-enclosure-1').hint,
    category: 'Components',
    brand: 'Synology',
    specifications: { 'Bays': '2', 'CPU': 'Dual-core', 'RAM': '2GB DDR4' }
  },
  {
    id: '37',
    name: 'Unify USB-C Hub',
    description: 'A 7-in-1 USB-C hub with HDMI, SD card readers, and USB 3.0 ports.',
    price: 4979.17,
    imageUrl: getImage('usb-hub-1').url,
    imageHint: getImage('usb-hub-1').hint,
    category: 'Accessories',
    brand: 'Anker',
    specifications: { 'Ports': '7', 'HDMI': '4K@30Hz', 'USB': 'USB 3.0' }
  },
  {
    id: '38',
    name: 'GlowSmart Lighting Kit',
    description: 'A starter kit of smart, color-changing LED bulbs to transform your home ambiance.',
    price: 8299.17,
    imageUrl: getImage('smart-lighting-1').url,
    imageHint: getImage('smart-lighting-1').hint,
    category: 'Accessories',
    brand: 'Philips Hue',
    specifications: { 'Bulbs': '3 (E27)', 'Colors': '16 million', 'Hub': 'Bridge included' }
  },
  {
    id: '39',
    name: 'Clarity360 Conference Mic',
    description: 'A 360-degree USB conference microphone for crystal-clear team meetings.',
    price: 8299.17,
    imageUrl: getImage('conference-mic-1').url,
    imageHint: getImage('conference-mic-1').hint,
    category: 'Accessories',
    brand: 'Jabra',
    specifications: { 'Pickup': '360-degree', 'Connectivity': 'USB, Bluetooth', 'Range': 'Up to 6 people' }
  },
  {
    id: '40',
    name: 'ErgoVertical Mouse',
    description: 'A wireless vertical ergonomic mouse designed to reduce wrist and arm strain.',
    price: 8299.17,
    imageUrl: getImage('ergonomic-mouse-1').url,
    imageHint: getImage('ergonomic-mouse-1').hint,
    category: 'Accessories',
    brand: 'Logitech',
    specifications: { 'Type': 'Vertical', 'DPI': '4000', 'Connectivity': 'Bluetooth, USB Receiver' }
  },
  {
    id: '41',
    name: 'Elevate Laptop Stand',
    description: 'An adjustable aluminum laptop stand to improve your posture and workspace ergonomics.',
    price: 3316.83,
    imageUrl: getImage('laptop-stand-1').url,
    imageHint: getImage('laptop-stand-1').hint,
    category: 'Accessories',
    brand: 'Rain Design',
    specifications: { 'Material': 'Aluminum', 'Adjustable': 'Yes', 'Compatibility': '10-17 inches' }
  },
  {
    id: '42',
    name: 'FlashRead SD Card Reader',
    description: 'A high-speed UHS-II SD and microSD card reader with a USB-C interface.',
    price: 2489.17,
    imageUrl: getImage('sd-card-reader-1').url,
    imageHint: getImage('sd-card-reader-1').hint,
    category: 'Accessories',
    brand: 'ProGrade',
    specifications: { 'Interface': 'USB-C 3.2 Gen 2', 'Card Slots': 'SD (UHS-II), microSD (UHS-II)', 'Speed': 'Up to 300MB/s' }
  },
  {
    id: '43',
    name: 'AetherBoard Z990',
    description: 'A feature-rich ATX motherboard with PCIe 5.0 and DDR5 support for gamers and creators.',
    price: 33117.00,
    imageUrl: getImage('motherboard-1').url,
    imageHint: getImage('computer-motherboard-1').hint,
    category: 'Components',
    brand: 'ASUS',
    specifications: { 'Chipset': 'Z990', 'Form Factor': 'ATX', 'RAM': 'DDR5' }
  },
  {
    id: '44',
    name: 'Vengeance 32GB RAM Kit',
    description: 'A 32GB (2x16GB) DDR5 6000MHz RAM kit for high-performance computing and gaming.',
    price: 12449.17,
    imageUrl: getImage('ram-kit-1').url,
    imageHint: getImage('ram-kit-1').hint,
    category: 'Components',
    brand: 'Corsair',
    specifications: { 'Capacity': '32GB (2x16GB)', 'Speed': '6000MHz', 'Type': 'DDR5' }
  },
  {
    id: '45',
    name: 'HydroChill 240 AIO Cooler',
    description: 'A 240mm all-in-one liquid CPU cooler with addressable RGB fans for optimal thermal performance.',
    price: 10707.00,
    imageUrl: getImage('cpu-cooler-1').url,
    imageHint: getImage('cpu-cooler-1').hint,
    category: 'Components',
    brand: 'NZXT',
    specifications: { 'Radiator Size': '240mm', 'Fans': '2x 120mm ARGB', 'Compatibility': 'Intel & AMD' }
  },
  {
    id: '46',
    name: 'PowerCore 850W PSU',
    description: 'An 850W Gold-rated, fully modular power supply for a stable and efficient system.',
    price: 12449.17,
    imageUrl: getImage('power-supply-1').url,
    imageHint: getImage('power-supply-1').hint,
    category: 'Components',
    brand: 'SeaSonic',
    specifications: { 'Wattage': '850W', 'Rating': '80+ Gold', 'Modularity': 'Fully Modular' }
  },
  {
    id: '47',
    name: 'FlowMesh PC Case',
    description: 'A mid-tower ATX PC case with a high-airflow front panel and tempered glass side.',
    price: 8299.17,
    imageUrl: getImage('pc-case-1').url,
    imageHint: getImage('pc-case-1').hint,
    category: 'Components',
    brand: 'Fractal Design',
    specifications: { 'Type': 'Mid-Tower ATX', 'Fans': '3 included', 'Side Panel': 'Tempered Glass' }
  }
];

export const categories = [...new Set(products.map(p => p.category))];
export const brands = [...new Set(products.map(p => p.brand))];
