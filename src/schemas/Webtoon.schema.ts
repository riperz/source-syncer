import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Webtoon {
  @Prop({ required: false })
  id: number;

  @Prop({ required: false })
  name: string;

  @Prop({ required: false })
  genre: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: false })
  chapter: number;
}

export const WebtoonSchema = SchemaFactory.createForClass(Webtoon);
