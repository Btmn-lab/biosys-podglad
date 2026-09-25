<?php namespace BioSys\Certyfikat; $w = konfig()['wydawca']; ?>
</main>
<footer class="stopka">
  <div class="stopka__srodek">
    <span>© <?= date('Y') ?> <?= e($w['nazwa']) ?> · systemy RCP, kontroli dostępu i rozliczania produkcji</span>
    <span><a href="<?= e($w['url']) ?>"><?= e(preg_replace('#^https?://#', '', $w['url'])) ?></a> · <a href="mailto:<?= e($w['email']) ?>"><?= e($w['email']) ?></a></span>
  </div>
</footer>
<script src="<?= e(sciezka('assets/certyfikat.js')) ?>" defer></script>
</body>
</html>
