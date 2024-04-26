export const tiposPet = ['Gato', 'Cachorro'] as const;
type TipoPet = (typeof tiposPet)[number];

export class Pet {
  constructor(
    private nome: string,
    private idade: number,
    private raca: string | null,
    private tipo: TipoPet
  ) {}
}
