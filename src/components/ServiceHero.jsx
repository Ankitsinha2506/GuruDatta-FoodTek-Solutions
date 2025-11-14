import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function ServiceHero() {
    const processingLines = [
        {
            id: 'tomato-puree',
            title: 'Tomato Puree Processing Line',
            description: 'Our tomato puree processing line offers a complete solution for converting fresh tomatoes into high-quality puree and paste. The system integrates advanced washing, crushing, heating, and aseptic filling technologies to ensure maximum yield and superior product quality. Designed for efficiency and hygiene, this line meets international food safety standards and can be customized to handle various production capacities.',
            machines: [
                { name: 'Tomato Washer', image: 'https://images.unsplash.com/photo-1674471361410-99b7cbb8ffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FzaGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyNzg5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Crusher & Pulper', image: 'https://images.unsplash.com/photo-1565168947597-1d79e2617404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY3J1c2hlciUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyNzg5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Evaporator System', image: 'https://images.unsplash.com/photo-1606600529547-e513e8c714f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXZhcG9yYXRvcnxlbnwxfHx8fDE3NjI3ODk2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Aseptic Filler', image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxsaW5nJTIwbWFjaGluZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyNzg5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'ginger-garlic',
            title: 'Ginger Garlic Paste Processing Line',
            description: 'Our ginger garlic paste processing line combines precision grinding and mixing technology to produce consistent, high-quality paste products. The automated system ensures minimal manual intervention while maintaining strict hygiene standards. From raw material cleaning to final packaging, every step is optimized for efficiency and product integrity, making it ideal for commercial-scale production.',
            machines: [
                { name: 'Grinding Mill', image: 'https://images.unsplash.com/photo-1721745250213-c3e1a2f4eeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmluZGluZyUyMG1pbGwlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2Mjc4OTYyOHww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Mixing Tank', image: 'https://images.unsplash.com/photo-1758873263491-f3969d8c6fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhpbmclMjB0YW5rJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2Mjc4OTYyOHww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Paste Filler', image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxsaW5nJTIwbWFjaGluZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyNzg5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Capping Machine', image: 'https://images.unsplash.com/photo-1522753071498-f3137a65aee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwaW5nJTIwbWFjaGluZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYyNzg5NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'ready-to-eat',
            title: 'Ready to Eat Meals Processing Line',
            description: 'Designed for modern food manufacturers, our ready-to-eat meals processing line provides comprehensive solutions for cooking, sterilization, and packaging. The system incorporates advanced retort technology to ensure extended shelf life without refrigeration while maintaining nutritional value and taste. Perfect for producing a wide range of meal products with consistent quality and safety.',
            machines: [
                { name: 'Cooking Kettle', image: 'https://images.unsplash.com/photo-1761654757982-2556a5f0a1ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa2V0dGxlJTIwY29va2luZ3xlbnwxfHx8fDE3NjI3ODk2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Retort Sterilizer', image: 'https://images.unsplash.com/photo-1740362381367-09cb98b4e1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRvcnQlMjBzdGVyaWxpemVyJTIwbWFjaGluZXxlbnwxfHx8fDE3NjI3ODk2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Tray Sealer', image: 'https://images.unsplash.com/photo-1676451244991-b6f51d54db55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF5JTIwc2VhbGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyNzg5NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Packaging Line', image: 'https://images.unsplash.com/photo-1715322350396-497487151d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBsaW5lJTIwYXV0b21hdGVkfGVufDF8fHx8MTc2Mjc4OTYzMXww&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'tutti-fruity',
            title: 'Tutti Fruity Canning Processing Line',
            description: 'Specialized equipment for processing and canning colorful tutti fruity and fruit products. Our line ensures gentle handling of delicate fruit pieces while maintaining vibrant colors and texture. The integrated washing, cutting, and canning system is designed for maximum efficiency and minimum waste, delivering premium quality canned products that meet global standards.',
            machines: [
                { name: 'Fruit Washer', image: 'https://images.unsplash.com/photo-1674471361410-99b7cbb8ffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FzaGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyNzg5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Dicer & Slicer', image: 'https://images.unsplash.com/photo-1641824346200-2c2a276e688a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNsaWNlciUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyNzg5NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Can Filler', image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxsaW5nJTIwbWFjaGluZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyNzg5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Seamer Machine', image: 'https://images.unsplash.com/photo-1656101485505-76408b9e6da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW4lMjBzZWFtZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYyNzg5NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'sweet-corn',
            title: 'Sweet Corn Frozen Processing Line',
            description: 'Advanced sweet corn processing line featuring individual quick freezing (IQF) technology to preserve freshness and nutritional value. From automated husking to flash freezing, our system ensures rapid processing that locks in flavor and quality. The line is designed for high-volume production with minimal labor requirements and maximum product consistency.',
            machines: [
                { name: 'Corn Husker', image: 'https://images.unsplash.com/photo-1565168947597-1d79e2617404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY3J1c2hlciUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyNzg5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Blanching System', image: 'https://images.unsplash.com/photo-1594494563672-e134529750aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFuY2hpbmclMjBzeXN0ZW0lMjBmb29kfGVufDF8fHx8MTc2Mjc4OTYzMnww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'IQF Freezer', image: 'https://images.unsplash.com/photo-1727947478281-1576560f10aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlemVyJTIwaW5kdXN0cmlhbCUyMElRRnxlbnwxfHx8fDE3NjI3ODk2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Bagging Machine', image: 'https://images.unsplash.com/photo-1636959941706-c0161f0f256e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWdnaW5nJTIwbWFjaGluZSUyMGF1dG9tYXRpY3xlbnwxfHx8fDE3NjI3ODk2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'mushroom',
            title: 'Canning Mushroom Processing Line',
            description: 'Our mushroom canning line provides gentle yet thorough processing to preserve the delicate texture and flavor of mushrooms. The system includes specialized washing, slicing, and blanching equipment designed specifically for mushroom handling. Complete with automated canning and sterilization, this line ensures food safety while maintaining product quality and appeal.',
            machines: [
                { name: 'Mushroom Washer', image: 'https://images.unsplash.com/photo-1674471361410-99b7cbb8ffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FzaGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyNzg5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Slicer', image: 'https://images.unsplash.com/photo-1641824346200-2c2a276e688a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNsaWNlciUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyNzg5NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Blancher', image: 'https://images.unsplash.com/photo-1594494563672-e134529750aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFuY2hpbmclMjBzeXN0ZW0lMjBmb29kfGVufDF8fHx8MTc2Mjc4OTYzMnww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Can Processing Unit', image: 'https://images.unsplash.com/photo-1656101485505-76408b9e6da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW4lMjBzZWFtZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYyNzg5NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'seafood',
            title: 'Seafood Canning Processing Line',
            description: 'Premium seafood processing line designed with stringent hygiene controls and temperature management systems. Our equipment ensures that seafood products are processed rapidly and safely, maintaining freshness from cleaning to sterilization. The automated line minimizes handling while maximizing quality, making it ideal for high-value seafood canning operations.',
            machines: [
                { name: 'Cleaning System', image: 'https://images.unsplash.com/photo-1674471361410-99b7cbb8ffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FzaGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyNzg5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Portioning Machine', image: 'https://images.unsplash.com/photo-1641824346200-2c2a276e688a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNsaWNlciUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyNzg5NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Can Filler', image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxsaW5nJTIwbWFjaGluZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyNzg5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Retort System', image: 'https://images.unsplash.com/photo-1740362381367-09cb98b4e1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRvcnQlMjBzdGVyaWxpemVyJTIwbWFjaGluZXxlbnwxfHx8fDE3NjI3ODk2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'pet-food',
            title: 'Pet Food Processing Line',
            description: 'Complete pet food manufacturing solution featuring advanced extrusion technology for producing high-quality dry pet food. Our system handles mixing, cooking, shaping, and drying with precision control to ensure nutritional consistency. The line is versatile enough to produce various pet food formats and can be customized for different recipes and production volumes.',
            machines: [
                { name: 'Mixer', image: 'https://images.unsplash.com/photo-1758873263491-f3969d8c6fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhpbmclMjB0YW5rJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2Mjc4OTYyOHww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Extruder', image: 'https://images.unsplash.com/photo-1565168947597-1d79e2617404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZXh0cnVkZXIlMjBtYWNoaW5lfGVufDF8fHx8MTc2Mjc4OTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Dryer', image: 'https://images.unsplash.com/photo-1758873263491-f3969d8c6fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJ5ZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYyNzg5NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Coating Machine', image: 'https://images.unsplash.com/photo-1758873263491-f3969d8c6fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhpbmclMjB0YW5rJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2Mjc4OTYyOHww&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'equipment-range',
            title: 'Equipment Range',
            description: 'Comprehensive range of individual processing equipment and components to build or upgrade your production facility. From material handling systems to storage solutions, we provide high-quality stainless steel equipment that integrates seamlessly with existing operations. Each piece of equipment is engineered for durability, efficiency, and easy maintenance.',
            machines: [
                { name: 'Conveyor Systems', image: 'https://images.unsplash.com/photo-1762291371985-ea3f3b2a77fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXlvciUyMHN5c3RlbSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyNzg5NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Storage Tanks', image: 'https://images.unsplash.com/photo-1758978912199-e0df57bde255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yYWdlJTIwdGFuayUyMHN0YWlubGVzc3xlbnwxfHx8fDE3NjI3ODk2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Industrial Pumps', image: 'https://images.unsplash.com/photo-1606600529547-e513e8c714f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXZhcG9yYXRvcnxlbnwxfHx8fDE3NjI3ODk2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Control Panels', image: 'https://images.unsplash.com/photo-1522753071498-f3137a65aee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwaW5nJTIwbWFjaGluZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYyNzg5NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        },
        {
            id: 'retort-machine',
            title: 'Canning Retort Machine',
            description: 'State-of-the-art retort sterilization systems designed for maximum food safety and shelf life extension. Our retort machines use precise temperature and pressure control to ensure complete sterilization while preserving product quality. Available in various configurations including batch, continuous, and specialty designs to suit different production requirements and product types.',
            machines: [
                { name: 'Batch Retort', image: 'https://images.unsplash.com/photo-1740362381367-09cb98b4e1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRvcnQlMjBzdGVyaWxpemVyJTIwbWFjaGluZXxlbnwxfHx8fDE3NjI3ODk2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Continuous Retort', image: 'https://images.unsplash.com/photo-1762291371985-ea3f3b2a77fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXlvciUyMHN5c3RlbSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyNzg5NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Water Spray Retort', image: 'https://images.unsplash.com/photo-1740362381367-09cb98b4e1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRvcnQlMjBzdGVyaWxpemVyJTIwbWFjaGluZXxlbnwxfHx8fDE3NjI3ODk2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                { name: 'Steam Retort', image: 'https://images.unsplash.com/photo-1606600529547-e513e8c714f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXZhcG9yYXRvcnxlbnwxfHx8fDE3NjI3ODk2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080' }
            ]
        }
    ];

    const [selectedLine, setSelectedLine] = useState(processingLines[0]);

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white to-[#FFFFF2]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-4">Our Processing Lines</h2>
                    <div className="w-24 h-1 bg-[#FF9136] mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive food processing solutions tailored to your production needs
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <motion.div
                        className="lg:w-1/4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-xl text-[#0446F2] mb-4">Processing Lines</h3>
                            <div className="space-y-2">
                                {processingLines.map((line) => (
                                    <button
                                        key={line.id}
                                        onClick={() => setSelectedLine(line)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${selectedLine.id === line.id
                                                ? 'bg-[#0446F2] text-white'
                                                : 'bg-[#FFFFF2] text-gray-700 hover:bg-[#0446F2]/10'
                                            }`}
                                    >
                                        <span className="text-sm">{line.title}</span>
                                        <ChevronRight
                                            size={16}
                                            className={`transition-transform ${selectedLine.id === line.id ? 'translate-x-1' : 'group-hover:translate-x-1'
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Area */}
                    <motion.div
                        className="lg:w-3/4"
                        key={selectedLine.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-3xl text-[#0446F2] mb-6">{selectedLine.title}</h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                {selectedLine.description}
                            </p>

                            <h4 className="text-2xl text-[#0446F2] mb-6">Equipment & Machinery</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                {selectedLine.machines.map((machine, index) => (
                                    <motion.div
                                        key={machine.name}
                                        className="bg-[#FFFFF2] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={machine.image}
                                                alt={machine.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0446F2]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <div className="p-4">
                                            <h5 className="text-lg text-[#0446F2] group-hover:text-[#FF9136] transition-colors">
                                                {machine.name}
                                            </h5>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ServiceHero;