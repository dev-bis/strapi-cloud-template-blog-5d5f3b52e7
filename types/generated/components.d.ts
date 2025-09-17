import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBrands extends Struct.ComponentSchema {
  collectionName: 'components_shared_brands';
  info: {
    displayName: 'Brands';
    icon: 'bold';
  };
  attributes: {
    Brands: Schema.Attribute.Enumeration<
      [
        'Satbet0.in',
        'Badshahcric.online',
        'Exchmarket.net',
        'Rajabets.world',
        'Betfairsites.com',
        'King567.world',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Satbet0.in'>;
  };
}

export interface SharedContacts extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contacts';
    icon: 'phone';
  };
  attributes: {
    Heading: Schema.Attribute.Text & Schema.Attribute.Required;
    Hyperlink: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    Canonical: Schema.Attribute.Text & Schema.Attribute.Required;
    Json: Schema.Attribute.JSON;
    Keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.brands': SharedBrands;
      'shared.contacts': SharedContacts;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
