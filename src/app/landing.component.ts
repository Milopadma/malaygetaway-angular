import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "my-component, landing",
  template: `
    <header class="bg-white flex flex-col items-stretch">
      <div class="self-center flex w-full max-w-[1141px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <h1 class="text-black text-3xl font-light leading-10 tracking-tighter">header</h1>
        <nav class="items-stretch flex justify-between gap-5 self-start max-md:justify-center">
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter">header</a>
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter">header</a>
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter">header</a>
          <a href="#" class="text-black text-base font-light leading-5 tracking-tighter whitespace-nowrap">header</a>
        </nav>
      </div>
    </header>

    <div class="bg-black min-h-[1px] w-full mt-7 max-md:max-w-full"></div>

    <section class="self-center flex w-full max-w-[899px] justify-between gap-5 mt-36 mb-48 max-md:max-w-full max-md:flex-wrap max-md:my-10">
      <div class="flex grow basis-[0%] flex-col items-stretch px-5">
        <h2 class="text-black text-5xl font-black leading-[58px] tracking-tighter -mr-5 max-md:text-4xl max-md:leading-[54px]">
          <span>Register</span>
          <br />
          <span>as merchant</span>
        </h2>
        <p class="text-black text-2xl font-light leading-7 tracking-tighter -mr-5 mt-4">
          <span>Start listing your businesses with</span>
          <br />
          <span>us</span>
        </p>
        <div class="justify-between items-stretch flex gap-2.5 w-auto px-6 py-2 border-2 border-solid border-black self-start max-md:mt-10 max-md:px-5">
          <div class="text-black text-3xl font-light leading-10 tracking-tighter">Start</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd4bb11-a709-4056-9594-f6cfec3791cc?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
            alt="Image"
            class="aspect-[1.03] object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </section>

    <div class="flex gap-0 mt-5">
      <div class="bg-blue-400 flex mr-0 w-[163px] shrink-0 h-[272px] flex-col"></div>
      <div class="bg-blue-300 flex w-[163px] shrink-0 h-[272px] flex-col mt-20 self-end max-md:mt-10"></div>
    </div>
  `,
})
export class landing {}

@NgModule({
  declarations: [landing],
  imports: [CommonModule],
  exports: [landing],
})
export class landingModule {}