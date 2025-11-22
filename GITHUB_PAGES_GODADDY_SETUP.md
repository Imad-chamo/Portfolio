# 🚀 Configuration GitHub Pages avec GoDaddy

Guide complet pour connecter votre domaine GoDaddy à GitHub Pages.

---

## 📋 Prérequis

- ✅ Votre site est déjà sur GitHub : https://github.com/Imad-chamo/Portfolio
- ✅ Vous avez un domaine sur GoDaddy
- ✅ Votre fichier `CNAME` contient : `imadchamkhi.com`

---

## 🔧 Étape 1 : Activer GitHub Pages

1. Allez sur votre dépôt GitHub : https://github.com/Imad-chamo/Portfolio
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source** :
   - Sélectionnez **Deploy from a branch**
   - Branch : **main**
   - Folder : **/ (root)**
5. Cliquez sur **Save**

⚠️ **Important** : Ne configurez pas encore le domaine personnalisé ici. On le fera après avoir configuré le DNS.

---

## 🌐 Étape 2 : Configurer le DNS sur GoDaddy

### Option A : Utiliser le domaine principal (imadchamkhi.com)

1. Connectez-vous à votre compte GoDaddy : https://www.godaddy.com
2. Allez dans **My Products** → **DNS** (ou **Domain Manager**)
3. Trouvez votre domaine `imadchamkhi.com`
4. Cliquez sur **Manage DNS** ou **DNS**

5. **Ajoutez/modifiez ces enregistrements DNS** :

#### Pour le domaine principal (imadchamkhi.com) :

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `185.199.108.153` | 600 |
| **A** | `@` | `185.199.109.153` | 600 |
| **A** | `@` | `185.199.110.153` | 600 |
| **A** | `@` | `185.199.111.153` | 600 |
| **CNAME** | `www` | `imad-chamo.github.io` | 600 |

**Note** : Les 4 enregistrements A sont nécessaires pour la haute disponibilité.

#### Si vous voulez utiliser www.imadchamkhi.com :

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `www` | `imad-chamo.github.io` | 600 |

6. **Supprimez** les anciens enregistrements A ou CNAME qui pointent ailleurs
7. Cliquez sur **Save** ou **Save All**

### Option B : Utiliser www.imadchamkhi.com (recommandé)

Si vous préférez utiliser `www.imadchamkhi.com` :

1. Modifiez le fichier `CNAME` pour contenir : `www.imadchamkhi.com`
2. Dans GoDaddy DNS, ajoutez seulement :
   - **CNAME** : `www` → `imad-chamo.github.io`

---

## ⏱️ Étape 3 : Attendre la propagation DNS

- ⏰ **Temps d'attente** : 5 minutes à 48 heures (généralement 1-2 heures)
- 🔍 **Vérifier** : Utilisez https://www.whatsmydns.net/#A/imadchamkhi.com
- ✅ Les 4 IPs GitHub doivent apparaître

---

## 🔗 Étape 4 : Configurer le domaine sur GitHub Pages

**ATTENDEZ** que le DNS soit propagé avant cette étape !

1. Retournez sur GitHub : https://github.com/Imad-chamo/Portfolio/settings/pages
2. Dans la section **Custom domain**, entrez votre domaine :
   - `imadchamkhi.com` (sans www)
   - OU `www.imadchamkhi.com` (avec www)
3. Cochez **Enforce HTTPS** (recommandé)
4. Cliquez sur **Save**

⚠️ **GitHub va vérifier** que le DNS est correctement configuré. Si ça échoue, attendez encore un peu.

---

## ✅ Étape 5 : Vérifier la configuration

1. **Vérifiez le DNS** :
   ```bash
   dig imadchamkhi.com +short
   # Doit retourner les 4 IPs GitHub
   ```

2. **Vérifiez le certificat SSL** :
   - GitHub génère automatiquement un certificat SSL (Let's Encrypt)
   - Cela peut prendre quelques minutes après la configuration du domaine

3. **Testez votre site** :
   - Allez sur https://imadchamkhi.com
   - Le site doit se charger correctement
   - Le cadenas vert doit apparaître (HTTPS)

---

## 🔒 Étape 6 : Forcer HTTPS (Recommandé)

1. Sur GitHub Pages settings, cochez **Enforce HTTPS**
2. Cela redirige automatiquement HTTP → HTTPS
3. Le certificat SSL est automatiquement renouvelé par GitHub

---

## 🐛 Dépannage

### Le site ne charge pas

1. **Vérifiez le DNS** :
   - Utilisez https://www.whatsmydns.net/
   - Les IPs doivent pointer vers GitHub (185.199.108.153, etc.)

2. **Vérifiez le fichier CNAME** :
   - Doit contenir exactement votre domaine (sans http:// ou https://)
   - Pas d'espace avant/après

3. **Vérifiez GitHub Pages** :
   - Le domaine doit être configuré dans Settings → Pages
   - Le statut doit être "Verified"

### Erreur "Domain not verified"

- Attendez 1-2 heures pour la propagation DNS
- Vérifiez que les enregistrements DNS sont corrects
- Assurez-vous que le fichier CNAME est bien dans le dépôt

### Le certificat SSL ne fonctionne pas

- Attendez 24 heures maximum
- GitHub génère automatiquement le certificat
- Vérifiez que "Enforce HTTPS" est coché

### Redirection www vs non-www

**Si vous utilisez `imadchamkhi.com` (sans www)** :
- Fichier CNAME : `imadchamkhi.com`
- DNS : 4 enregistrements A + CNAME www → github.io

**Si vous utilisez `www.imadchamkhi.com` (avec www)** :
- Fichier CNAME : `www.imadchamkhi.com`
- DNS : CNAME www → github.io

---

## 📝 Notes Importantes

1. **Ne supprimez jamais le fichier CNAME** une fois configuré
2. **Le DNS peut prendre jusqu'à 48h** pour se propager complètement
3. **GitHub Pages est gratuit** et supporte les domaines personnalisés
4. **Le certificat SSL est automatique** et renouvelé par GitHub

---

## 🎯 Résumé des IPs GitHub Pages

Utilisez ces 4 IPs pour les enregistrements A :

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## ✅ Checklist Finale

- [ ] GitHub Pages activé (branch main, folder /)
- [ ] DNS configuré sur GoDaddy (4 enregistrements A)
- [ ] Fichier CNAME présent dans le dépôt
- [ ] Domaine configuré dans GitHub Pages settings
- [ ] HTTPS activé (Enforce HTTPS)
- [ ] Site accessible sur https://imadchamkhi.com
- [ ] Certificat SSL valide (cadenas vert)

---

**Votre site sera accessible sur : https://imadchamkhi.com** 🎉

