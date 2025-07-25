import { IconButton } from '@/components/icon-button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { Copy, Link } from 'lucide-react';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { Ranking } from './ranking';
import { Stats } from './stats';

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>

            <InputField
              readOnly
              defaultValue="http://localhost:3000/invite/545443243234"
            />

            <IconButton className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </InputRoot>

          <Stats />
        </div>
      </div>
      <Ranking />
    </div>
  );
}
