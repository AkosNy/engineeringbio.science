---
layout: page
permalink: /research/
title: Research
description: >

nav: true
nav_order: 2
---

<style>
  .research-block { margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 0.5px solid rgba(128,128,128,0.2); }
  .research-block:last-child { border-bottom: none; }
  .research-block h2 { font-size: 1.45rem; margin-bottom: 1rem; line-height: 1.3; }
  .research-block p { line-height: 1.65; }
  .figure-caption { font-size: 0.82rem; color: #666; font-style: italic; margin-top: 0.5rem; text-align: center; line-height: 1.4; }
  .pubs-block { margin-top: 1.5rem; background: rgba(0,0,0,0.02); border-left: 2px solid rgba(15,110,86,0.6); padding: 0.8rem 1.1rem; border-radius: 0 4px 4px 0; font-size: 0.9rem; line-height: 1.6; }
  .pubs-block strong.block-label { display: block; font-size: 0.82rem; letter-spacing: 0.4px; text-transform: uppercase; color: #0F6E56; margin-bottom: 0.4rem; font-weight: 600; }
  .pubs-block .ref { display: block; margin-bottom: 0.5rem; }
  .pubs-block .ref:last-child { margin-bottom: 0; }
  .pubs-block sup { font-size: 0.75em; }
  .highlight-note { font-style: italic; margin-top: 0.5rem; font-size: 0.88rem; }
  .recognition { background: rgba(15,110,86,0.08); border-left: 3px solid #0F6E56; padding: 0.7rem 1rem; margin: 1rem 0; font-size: 0.92rem; border-radius: 0 4px 4px 0; }
</style>

<!-- ================================================================= -->
<!-- BLOCK 1: Multi-omics-guided genome synthesis and design             -->
<!-- ================================================================= -->
<div class="research-block">

<div class="row align-items-center">
  <div class="col-md-7">
    <h2>Multi-omics-guided genome synthesis and design</h2>
    <p>From viruses to human cells, life's most fundamental process &mdash; the translation of genetic information into proteins &mdash; relies on an ancient and remarkably conserved language: the genetic code. This universal language orchestrates the precise interactions between messenger RNA, transfer RNAs (tRNAs), and the ribosome to convert nucleic acid-encoded instructions into proteins using just 20 standard amino acids. While evolution has generated an astounding biological diversity over billions of years, the genetic code remained near-perfectly conserved across all domains of life &mdash; until very recently.</p>

    <p>During my postdoctoral research, I have demonstrated that rational genome design and genetic code engineering enable us to generate organisms that achieve three key innovations: (i) broad resistance to natural viruses, (ii) prevention of genetic information flow between engineered organisms and natural species, and (iii) the capability to biosynthesize entirely new classes of genetically encoded polymers.</p>
  </div>
  <div class="col-md-5">
    {% include figure.liquid
       path="assets/img/omics_genome_design.png"
       class="img-fluid rounded z-depth-1"
       alt="Multi-omics-guided genome synthesis and design." %}
    <p class="figure-caption">Multi-omics-guided synthesis and rescue of radically recoded <em>E. coli</em> genomes.</p>
  </div>
</div>

<p>Achieving these important goals requires the reassignment of multiple of the 64 codons nature uses to encode proteins. However, synonymous codon replacement (recoding) is frequently lethal, and the impact of recoding on fitness remains poorly understood. In this project, I have investigated these effects using whole-genome synthesis, trillion-variant-scale directed evolution, and the co-profiling of the transcriptome, translatome, and proteome of multiple synthetic <em>Escherichia coli</em> genomes. Using these tools, we construct multiple partially recoded <em>E. coli</em> strains that rely on an initially highly deleterious 57-codon genetic code. As these analyses revealed widespread defects &mdash; including unassigned codons &mdash; in existing recoded organisms, I have combined proteomics, transcriptomics, and translatomics to revise genome design, uncover, and mitigate defects.</p>

<p>With this project, <strong>I have developed a multi-omics-guided evolution and genome-design strategy that rapidly debugs synthetic chromosomal regions and restores fitness</strong>, paving the way for the synthesis of functional, high-fitness genomes with radical changes. Beyond enabling new therapeutics, biocatalysts, and biomaterials with properties unattainable with existing biology, these advances provide secure biosystems and foundational methods for engineering life beyond the constraints of natural biology.</p>

<div class="pubs-block">
<strong class="block-label">Relevant publication</strong>
<span class="ref"><strong>Akos Nyerges</strong><sup>#</sup>, Chiappino-Pepe A, Budnik B, Baas-Thomas M, Flynn R, Yan S, Ostrov N, Liu M, Wang M, Zheng Q, Hu F, Chen K, Rudolph A, Chen D, Ahn J, Spencer O, Ayalavarapu V, Tarver A, Harmon-Smith M, Hamilton M, Blaby I, Yoshikuni Y, Hajian B, Jin A, Kintses B, Szamel M, Seregi V, Shen Y, Li Z, Church GM<sup>#</sup> (2024). <em>Synthetic genomes unveil the effects of synonymous recoding.</em> <em>bioRxiv</em>. <a href="https://www.biorxiv.org/content/10.1101/2024.06.16.599206">10.1101/2024.06.16.599206</a></span>
</div>

<div class="pubs-block">
<strong class="block-label">Highlighted in <em>Nature</em> and <em>The New York Times</em></strong>
<span class="ref"><a href="https://www.nature.com/articles/d41586-025-00462-z"><em>Why is it so hard to rewrite a genome?</em></a> &mdash; Michael Eisenstein, <em>Nature</em> <strong>638</strong>, 848-850 (2025)</span>
<span class="ref"><a href="https://nyti.ms/3Hf4f9v">Interview with Carl Zimmer for <em>The New York Times</em></a>, on engineering the genetic code and the creation of radically engineered synthetic genomes (August 2025)</span>
</div>

</div>

<!-- ================================================================= -->
<!-- BLOCK 2: Genetic firewall for virus-resistance and biocontainment   -->
<!-- ================================================================= -->
<div class="research-block">

<div class="row align-items-center">
  <div class="col-md-5 order-md-1 order-2">
    {% include figure.liquid
       path="assets/img/disappearing_phages.jpg"
       class="img-fluid rounded z-depth-1"
       alt="Genetic firewall for virus-resistance and biocontainment." %}
    <p class="figure-caption">Amino-acid-swapped genetic code providing virus-resistance and biocontainment. <br/><em>Illustration by Behnoush Hajian; celline.design</em></p>
  </div>
  <div class="col-md-7 order-md-2 order-1">
    <h2>Genetic firewall for virus-resistance and biocontainment</h2>
    <p>The universal nature of the genetic code allows organisms to exchange functions through horizontal gene transfer (HGT) and enables recombinant gene expression in heterologous hosts. However, the shared language of the same code permits the undesired spread of antibiotic-, herbicide-, and pesticide-resistance genes and allows viruses to cause diseases.</p>

    <p>In my first postdoctoral project, <strong>I developed a technology that renders cells resistant to natural viruses and biocontains cells and their genetic information by establishing a genetic-code-based firewall.</strong></p>
  </div>
</div>

<p>I first discovered that viruses and horizontally transferable mobile genetic elements easily overcome the genetic isolation of organisms that rely on a compressed genetic code (<em>i.e.</em>, a fewer-than-64 codon genetic code), despite the lack of essential host tRNAs and Release Factor 1 necessary for viral translation. Next, I noticed that modified viral tRNAs provide exceptionally efficient codon reassignment, allowing me to establish a genetic firewall and prevent both viral infections and the escape of genetic information. To establish a genetic firewall, I have developed an artificial, amino-acid-swapped genetic code that reassigns two of the six serine codons to leucine during translation and a third codon to a non-natural amino acid (L-4,4'-biphenylalanine) to biocontain the host.</p>

<p>This amino-acid-swapped genetic code renders <em>Escherichia coli</em> cells resistant to viral infections (including bacteriophages in environmental samples and sewage) by mistranslating viral proteomes and prevents the escape of synthetic genetic information by engineered reliance on serine codons to produce leucine-requiring proteins. <strong>This work suggests a general strategy to make organisms safely resistant to all natural viruses and prevent genetic information flow into and out of Genetically Modified Organisms (GMOs).</strong></p>

<div class="recognition">
Selected as <a href="https://magazine.hms.harvard.edu/articles/year-discovery"><em>one of the most important discoveries at Harvard Medical School in 2023</em></a>, by Harvard Medicine News.
</div>

<div class="pubs-block">
<strong class="block-label">Relevant publication &amp; patent applications</strong>
<span class="ref"><strong>Akos Nyerges</strong><sup>#</sup>, Vinke S, Flynn R, Owen SV, Rand EA, Budnik B, Keen E, Narasimhan K, Marchand JA, Baas-Thomas M, Liu M, Chen K, Chiappino-Pepe A, Hu F, Baym M, Church GM<sup>#</sup> (2023). <em>A swapped genetic code prevents viral infections and gene transfer.</em> <em>Nature</em> 2023:1-8. <a href="https://doi.org/10.1038/s41586-023-05824-z">10.1038/s41586-023-05824-z</a> <em>(Preprint: bioRxiv, Jul. 8, 2022.)</em></span>
<span class="ref">Nyerges AJ, Church GM (2022). <em>Methods and compositions for conferring cellular resistance to viral infection.</em> <a href="https://patents.google.com/?q=%22PCT%2FUS2023%2F069468%22"><strong>PCT/US2023/069468</strong></a></span>
<span class="ref">Nyerges AJ, Church GM (2021). <em>Methods for making and using genomically recoded cells.</em> <a href="https://patentimages.storage.googleapis.com/ae/5c/77/d0188cb25a2236/WO2022125531A1.pdf"><strong>PCT/US2021/062177</strong></a> <span style="font-size: 0.85em;">(<a href="https://patentimages.storage.googleapis.com/ae/5c/77/d0188cb25a2236/WO2022125531A1.pdf">WO2022/125531</a>)</span></span>
</div>

<div class="pubs-block">
<strong class="block-label">Highlights &amp; press coverage</strong>
<p style="margin: 0.2rem 0;">Highlighted in <a href="https://www.nature.com/articles/s41587-023-01764-1"><em>Nature Biotechnology</em></a>; <a href="https://www.newscientist.com/article/2332242-e-coli-that-is-recoded-to-be-virus-resistant-may-aid-drug-production/"><em>New Scientist</em></a>; <a href="https://doi.org/10.1093/synbio/ysad011"><em>Synthetic Biology</em></a>; <a href="https://www.science.org/content/article/rewritten-genetic-code-allows-bacteria-fend-viral-attacks"><em>Science</em></a>; <a href="https://www.energy.gov/science/ber/articles/creating-virus-resistant-bacterium-using-synthetic-engineered-genome">U.S. Department of Energy</a>; <a href="https://www.nature.com/articles/d41586-023-00702-0"><em>Nature</em> News &amp; Views</a>.</p>
<p style="margin: 0.4rem 0 0;">Interviews in <a href="https://www.nature.com/articles/d41586-023-00785-9"><em>Nature</em> Podcast</a>, <a href="https://www.drugdiscoverynews.com/a-pioneer-of-the-multiplex-frontier-15646"><em>Drug Discovery News</em></a>, <a href="https://www.the-scientist.com/news-opinion/new-synthetic-e-coli-is-immune-to-bacteriophage-infection-71046"><em>The Scientist</em></a>, and <a href="https://hms.harvard.edu/news/designing-more-useful-bacteria">Harvard Medical School News</a>.</p>
</div>

</div>

<!-- ================================================================= -->
<!-- BLOCK 3: Accelerated directed evolution in diverse bacteria         -->
<!-- ================================================================= -->
<div class="research-block">

<div class="row align-items-center">
  <div class="col-md-7">
    <h2>Accelerated directed evolution in diverse bacteria</h2>
    <p>During my PhD, <strong>I developed a method that enables the precise mutagenesis of multiple, long genomic segments in multiple species without off-target modifications.</strong> This technology (DIvERGE) enables the exploration of vast numbers of combinatorial genetic alterations in their native genomic context and allows accelerated directed evolution.</p>

    <p>I hypothesized and demonstrated that a genome engineering system I developed earlier during my undergraduate research (pORTMAGE; Nyerges, A. et al., <em>PNAS</em>, 2016, <a href="https://pubmed.ncbi.nlm.nih.gov/26884157/">PMID: 26884157</a>) enables the translation of chemical DNA-synthesis-based mutagenesis into focused genome-diversification with up to &gt;1,000,000x the wild-type mutation rate. During my Ph.D., I scaled up this method to generate billions of combinatorial variants of multiple drug targets simultaneously and quickly discover drug-resistance processes.</p>
  </div>
  <div class="col-md-5">
    {% include figure.liquid
       path="assets/img/research/3_diverge.webp"
       class="img-fluid rounded z-depth-1"
       alt="DIvERGE and pORTMAGE: accelerated directed evolution across bacterial species." %}
    <p class="figure-caption">DIvERGE + pORTMAGE enable precise, portable, multi-species directed evolution.</p>
  </div>
</div>

<p><strong>Using the combinatorial mutational scanning of drug targets with DIvERGE and long-read sequencing, we identified previously undetected resistance processes for multiple antibiotics</strong>, including a clinical-stage antibiotic, gepotidacin. In a follow-up paper, we validated the discovered gepotidacin resistance mechanism's significance in <em>in vivo</em> infection models (Szili, P. ..., Nyerges, A<sup>#</sup>, <em>Antimicrobial Agents and Chemotherapy</em>, 2019, <a href="https://pubmed.ncbi.nlm.nih.gov/31235632/">PMID: 31235632</a>). Strikingly, gepotidacin's clinical trial later revealed the same resistance process in patients.</p>

<p>In connected papers, we utilized DIvERGE to perform accelerated directed evolution in multiple bacterial species, identify antibiotic resistance-conferring mutations to antibiotics in days, evolve nanobodies with affinity to novel targets, discover bacteriophage mutants to target important bacterial pathogens, and rapidly optimize genes, genetic circuits, up to entire synthetic genomes.</p>

<p>This technology was later outlicensed for drug development.</p>

<div class="pubs-block">
<strong class="block-label">Relevant publications &amp; patent</strong>
<span class="ref"><strong>Akos Nyerges</strong><sup>#</sup>, Csorgo B, Draskovits G, Kintses B, Szili P, Ferenc G, Revesz T, Ari E, Nagy I, Balint B, Vasarhelyi BM, Bihari P, Szamel M, Balogh D, Papp H, Kalapis D, Papp B, Pal C<sup>#</sup> (2018). <em>Directed evolution of multiple genomic loci allows the prediction of antibiotic resistance.</em> <em>PNAS</em> <strong>115</strong>, E5726-E5735. <a href="https://doi.org/10.1073/pnas.1801646115">10.1073/pnas.1801646115</a></span>
<span class="ref"><a href="https://patents.google.com/patent/US10669537B2/en"><strong>US10669537B2</strong></a>: <em>Mutagenizing intracellular nucleic acids</em> (granted U.S. Patent; PCT/EP2017/082574; outlicensed)</span>
<span class="ref"><strong>Akos Nyerges</strong><sup>*</sup>, Csorgo B<sup>*</sup>, Nagy I, Balint B, Bihari P, Lazar V, Apjok G, Umenhoffer K, Bogos B, Posfai G, Pal C (2016). <em>A highly precise and portable genome engineering method allows comparison of mutational effects across bacterial species.</em> <em>PNAS</em> 201520040. <a href="https://doi.org/10.1073/pnas.1520040113">10.1073/pnas.1520040113</a></span>
</div>

<div class="pubs-block">
<strong class="block-label">Highlights</strong>
<p style="margin: 0.2rem 0;"><em>PNAS' In This Issue</em>, <strong>115</strong>(25):6315-6317.</p>
<p style="margin: 0.4rem 0 0;">Highlighted as <em>"Breakthrough method predicts resistance to antibiotics under development."</em></p>
</div>

</div>

<!-- ================================================================= -->
<!-- BLOCK 4: Rational design of antibiotic drugs with limited resistance-->
<!-- ================================================================= -->
<div class="research-block">

<div class="row align-items-center">
  <div class="col-md-5 order-md-1 order-2">
    {% include figure.liquid
       path="assets/img/research/4_antibiotics.webp"
       class="img-fluid rounded z-depth-1"
       alt="Rational design of balanced dual-targeting antibiotics." %}
    <p class="figure-caption">Rational design of dual-targeting DNA gyrase and topoisomerase IV inhibitors with suppressed resistance evolution.</p>
  </div>
  <div class="col-md-7 order-md-2 order-1">
    <h2>Rational design of antibiotic drugs with limited resistance</h2>
    <p>In my second PhD project &mdash; in collaboration with <a href="https://www.ffa.uni-lj.si/en/employee-list/lucija-peterlin-masic">Lucija Peterlin Masic</a>'s team &mdash; using structure-guided rational drug design, we developed a series of novel DNA gyrase and topoisomerase IV dual-targeting antibiotics.</p>

    <p><strong>In this project</strong>, we have combined rational, target-based drug development with evolutionary analysis and the high-throughput prediction of resistance processes to identify key residues for drug-target interaction and suppress the evolution of drug resistance by rationally modifying our drug candidate.</p>
  </div>
</div>

<p>Next, I performed detailed preclinical testing for these compounds to demonstrate their safety and efficacy. This novel antibiotic displays broad activity against both drug-susceptible and multidrug-resistant Gram-positive bacterial pathogens, lacks toxicity in preclinical tests, was well-tolerated in mice, and demonstrated exceptional potency in mouse infection models.</p>

<div class="pubs-block">
<strong class="block-label">Relevant publications &amp; patent application</strong>
<span class="ref">Szili P, Draskovits G, Revesz T, Bogar F, Balogh D, Martinek T, Daruka L, Spohn R, Vasarhelyi BM, Czikkely M, Kintses B, Grezal G, Ferenc G, Pal C<sup>#</sup>, <strong>Akos Nyerges</strong><sup>#</sup> (2019). <em>Rapid evolution of reduced susceptibility against a balanced dual-targeting antibiotic through stepping-stone mutations.</em> <em>Antimicrobial Agents and Chemotherapy</em> <strong>63</strong>. <a href="https://journals.asm.org/doi/10.1128/aac.00207-19">10.1128/aac.00207-19</a></span>
<span class="ref"><a href="https://patents.google.com/patent/US12258342B2/en"><strong>US12258342B2</strong></a> (PCT/EP2019/073412): <em>New Class of DNA Gyrase and/or Topoisomerase IV Inhibitors with Activity Against Gram-Positive and Gram-Negative Bacteria</em> (granted U.S. Patent)</span>
<span class="ref"><strong>Akos Nyerges</strong><sup>*</sup>, Tomasic T<sup>*</sup>, Durcik M<sup>*</sup>, Revesz T, Szili P, Draskovits G, Bogar F, Skok Z, Zidar N, Ilas J, Zega A, Kikelj D, Daruka L, Kintses B, Vasarhelyi B, Foldesi I, Kata D, Welin M, Kimbung R, Focht D, Masic LP<sup>#</sup>, Pal C<sup>#</sup> (2020). <em>Rational design of balanced dual-targeting antibiotics with limited resistance.</em> <em>PLOS Biology</em> <strong>18</strong>, e3000819. <a href="https://doi.org/10.1371/journal.pbio.3000819">10.1371/journal.pbio.3000819</a></span>
</div>

<div class="pubs-block">
<strong class="block-label">PDB structures deposited</strong>
<span class="ref"><a href="https://www.rcsb.org/structure/6TCK">RCSB 6TCK</a></span>
<span class="ref"><a href="https://www.rcsb.org/structure/6TTG">RCSB 6TTG</a></span>
</div>

</div>

---

<p class="text-center" style="margin-top: 2rem;">
<a href="{{ '/publications/' | relative_url }}" class="btn btn-outline-secondary">See complete publication list &rarr;</a>
</p>

<!-- ================================================================= -->
<!-- FUNDING                                                             -->
<!-- ================================================================= -->

<h2 style="margin-top: 3rem;">Funding</h2>

<p>This research is supported by the U.S. National Institutes of Health and the U.S. Department of Energy.</p>

<div class="row align-items-center mt-3 mb-4">
  <div class="col-md-6 col-12 mb-4 text-center">
    <p style="font-size: 0.9rem; margin-top: 0.6rem;">
      <strong>NIH / NIBIB</strong> &mdash; Pathway to Independence (K99/R00)<br/>
      <em>Development of a Gene-Transfer-Resistant and Biocontained Next-Generation Bacterial Host for Controlled Drug Delivery</em><br/>
      <a href=" " style="font-size: 0.82rem;"> </a>
    </p>
  </div>
  <div class="col-md-6 col-12 mb-4 text-center">
    <p style="font-size: 0.9rem; margin-top: 0.6rem;">
      <strong>U.S. Department of Energy</strong> &mdash; Macromolecular Crystallography<br/>
      <em>Structure-guided genetic code engineering for tight microbial biocontainment</em><br/>
      <span style=" "> </span>
    </p>
  </div>
</div>
